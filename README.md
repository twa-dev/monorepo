# Telegram Web Apps Documentation

## About

This project represents the platform documentation using the
[Docusaurus](https://docusaurus.io/) package. It provides full information about
platform with all its aspects and features. You can find this documentation
deployed at [docs.twa.dev](https://docs.twa.dev).

## Contribution

As long as making good documentation is rather important and endless task, we
are glad to see any contribution. 

Please, don't forget that this documentation is developed in several 
languages (English and Russian) and it is required to make related changes both 
in English and Russian versions of documents. In case, you have problems with
one of the languages, please, contact the repository owners, or request help
in [community chat](https://t.me/twa_dev).

Making changes by yourself also requires one more little workflow thing from
developer. As long as we want developers commits readable, we use `commitizen`
which makes commits more understandable. Here is how it works:

1. Stage changes (for example `git add -A`);
2. Commit them and describe what changes were done via `pnpm run commit`.

## TODO

- [ ] Create GitHub workflow which allows pull request deploy to check if
documentation works fine. So, just a build test is not enough