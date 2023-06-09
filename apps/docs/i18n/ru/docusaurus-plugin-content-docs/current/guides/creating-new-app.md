# Создание приложения

В этой статье мы углубимся в процесс разработки нового приложения на платформе
Telegram Web Apps, выясним, какие именно действия необходимо произвести,
чтобы его создать, а также озвучим советы по улучшению процесса создания
приложения.

Процесс написания приложения на платформе обычно состоит из следующих
базовых этапов:

1. Создание бота Telegram и приложения TWA.
2. Создание веб-приложения.
3. Получение ссылки на веб-приложение и установка ее в настройках Web App.

## Перед началом

Перед созданием нового приложения TWA, необходимо помнить про важное правило:
_не создавайте сущности, связанные с разработкой в production-среде_. Разработка
в рамках production-среды является признаком дурного тона, поэтому используйте
её сугубо если без этого не обойтись.

Для создания приложения мы должны использовать тестовую среду. Для того
чтобы переключиться на тестовую среду, ознакомьтесь с разделом
[Тестовая среда](../test-environment.md).

Говоря о преимуществах, которые мы получаем от тестовой среды, мы можем
упомянуть возможность использования `http` ссылок вместо `https`, и даже
IP напрямую. В production-среде можно указывать только `https` ссылки.

## Создание приложения в BotFather

Так как приложения Telegram Web Apps технически привязаны к ботам Telegram,
сперва необходимо создать бота Telegram. Для этого необходимо найти отца всех
ботов, бота [BotFather](https://t.me/botfather) и воспользоваться командой
`/newbot`, после чего пройти предлагаемый процесс, указав все необходимые данные.

Когда бот создан, тут же необходимо использовать команду `/newapp` и снова пройти
процедуру создания уже другой сущности - приложения Telegram Web Apps,
привязывая его к боту Telegram. С этого момента созданное приложение будет
доступно по прямой ссылке вида `https://t.me/{mybot}/{myapp}`.

## Ссылка на приложение

:::info

Перед прочтением этой секции убедитесь, что вы уже создали frontend-приложение,
доступ к которому можно получить по прямой ссылке.

:::

Этот шаг является обязательным в процессе создания приложения TWA. Ввиду того,
что приложения TWA являются веб-приложениями, самым обычным способом
получения и отображения приложений является загрузка их по какому-либо URL и
дальнейшая отрисовка.

Как уже было упомянуто раннее, в production-среде разрешено использовать
только ссылки, имеющие `https` протокол с валидным SSL сертификатом. В противном
случае устройства пользователей не смогут загрузить приложение. В тестовой
среде можно использовать как `http` ссылки, так и прямые IP-адреса.

Учитывая тот факт, что ссылки в production-среде и для разработки отличаются,
мы рассмотрим процесс их получения отдельно.

### Для разработки

#### Ngrok

У многих новичков в разработке может часто возникать вопрос о том, как
просто получить временный URL для разработки, работающий на `https` протоколе
и имеющий валидный SSL сертификат. Решение этой проблемы является достаточно
простым и распространенным, разработчики могут использовать такой сервис как
[ngrok](https://ngrok.com/). Он имеет низкие ограничения для
разработки и позволяет создавать приложения с комфортом.

Представим, что разрабатываемое приложение в данный момент запущено по
адресу `localhost:3000`. Тогда для того, чтобы открыть туннель к этому
приложению, необходимо использовать следующую команду:

```bash title="Пример получения ссылки"
ngrok http 3000
```

:::caution

Не используйте предоставленную ссылку ngrok в production-среде.
Frontend-приложения должны представлять собой набор статичных файлов и быть
выгружены на какой-либо хостинг. Ссылка на приложение не должна быть
динамической, так как в таком случае ее придется постоянно менять в BotFather.

:::

#### Localtunnel

[Localtunnel](https://github.com/localtunnel/localtunnel) это ещё одна
аналогичная технология, которая предоставляет валидную `https` ссылку.

```bash title="Пример получения ссылки"
lt --port 3000 -s web-apps-test
# your url is: https://web-apps-test.loca.lt
```

:::caution

Основной проблемой этого проекта является отключение туннеля в случае, если
сервер разработки был отключен.

:::

### Для релиза

Получение production-ссылки также не отличается сложностью. Для этого
можно воспользоваться популярными бесплатными сервисами размещения статики:

- [GitHub Pages](https://pages.github.com/)
- [Heroku](https://www.heroku.com/)
- [Vercel](https://vercel.com/)

Тем не менее разработчик также может пользоваться и любым другим хостингом.
Важно помнить, что ссылка на приложение должна работать на протоколе
`https` и иметь валидный SSL-сертификат. Для получения бесплатного
можно рассмотреть [certbot](https://certbot.eff.org/).

### Применение ссылки

Когда https ссылка получена, её необходимо использовать в ранее созданном боте Telegram. Telegram
поддерживает несколько способов установки этой ссылки:

- **Для кнопки меню бота**. Тогда каждый пользователь, который будет переходить в бота, сможет
  открыть
  его "меню" в виде разработанного приложения.
- **Для приложения TWA**. Тогда приложение будет открываться лишь в случае, если пользователь
  переходит по ссылке формата `https://t.me/{mybot}/{myapp}`. В этом случае никаких переходов в бота
  пользователю совершать необходимости не будет.

#### Кнопка меню

Для установки ссылки на кнопке меню, необходимо перейти к диалогу с BotFather и использовать
команду (отправить сообщение) `/setmenubutton`. Далее, BotFather попросит выбрать бота, указать
ссылку, а также заголовок для кнопки меню.

Как результат, когда пользователь входит в чат с ботом, он сможет открыть веб-приложение при помощи
клика на кнопку меню слева снизу в интерфейсе.

#### Прямая ссылка

Для установки прямой ссылки на приложение, необходимо выполнить следующие этапы:

1. Отправить BotFather команду `/myapps`.
2. Выбрать необходимое приложение.
3. Нажать `Edit link` и установить новую ссылку.

Теперь, когда пользователь перейдет по ссылке формата `https://t.me/{mybot}/{myapp}`, Telegram
отобразит веб-компонент с адресом источника в виде указанного в настройках URL.

## Дополнительно

### Hot Module Replacement

Процесс разработки приложения это достаточно комплексный и длительный процесс.
Вносимые изменения в коде всегда хочется сразу видеть на экране. Для того
чтобы видеть изменения в режиме реального времени, необходимо использовать
такую технику как **Hot Module Replacement**. В этой секции не будет рассмотрен
процесс ее настройки, так как он зачастую зависит от проекта, но известные
фреймворки уже включают этот функционал по умолчанию.

Как настроить HMR можно узнать
в [этой статье Webpack](https://webpack.js.org/guides/hot-module-replacement/).

[//]: # (## Заключение)

[//]: # ()

[//]: # (Этого вполне достаточно для того, чтобы создать свое первое приложение TWA.)

[//]: # (Тем не менее, данный гайд не покрывает все особенности платформы, а лишь)

[//]: # (помогает избежать бесполезной траты времени на базовые и простые проблемы.)

[//]: # (## Debugging application)

[//]: # ()

[//]: # (As long as Web Apps are web applications, and they are opened in some native)

[//]: # (components &#40;not in browser&#41;, we are not allowed to debug them in common way as)

[//]: # (we do it in browser applications until some additional actions are done.)

[//]: # ()

[//]: # (To enable debug mode in native application follow)

[//]: # ([official documentation]&#40;https://core.telegram.org/bots/webapps#debug-mode-for-web-apps&#41;)

[//]: # (.)