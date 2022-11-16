# Difference Calculator for 2 files

[![CI](https://github.com/Svencap/frontend-project-lvl2/actions/workflows/main.yml/badge.svg)](https://github.com/Svencap/frontend-project-lvl2/actions/workflows/main.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/dd56d65226efcb4f9f35/maintainability)](https://codeclimate.com/github/Svencap/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dd56d65226efcb4f9f35/test_coverage)](https://codeclimate.com/github/Svencap/frontend-project-lvl2/test_coverage)


## Installation
```
npm install -g gendiff
```

## JSON
```
gendiff file1.json file2.json
```
Сравнение плоских файлов (JSON)

[![asciicast](https://asciinema.org/a/ig3V0IyltUp8DsxQIAbKS37TB.svg)](https://asciinema.org/a/ig3V0IyltUp8DsxQIAbKS37TB)

## Вложенные файлы

Сравнение вложенных файлов (JSON)

[![asciicast](https://asciinema.org/a/iZ12tDvTp3Q0EbmGoW9fAZ0yH.svg)](https://asciinema.org/a/iZ12tDvTp3Q0EbmGoW9fAZ0yH)

## YAML
```
gendiff file1.yaml file2.yaml
```
Сравнение плоских файлов (yaml)

[![asciicast](https://asciinema.org/a/B2vHppxk5AaawrJFlGwsYyz2D.svg)](https://asciinema.org/a/B2vHppxk5AaawrJFlGwsYyz2D)


## Format "Plain"
```
gendiff -f plain file3.json file4.yaml
```
Вывод в плоском формате

[![asciicast](https://asciinema.org/a/ooQ5B5P1jYT7DP32BkXt0af9q.svg)](https://asciinema.org/a/ooQ5B5P1jYT7DP32BkXt0af9q)

## Format "JSON"
```
gendiff -f json file3.json file4.json
```

Вывод в формате json

[![asciicast](https://asciinema.org/a/tOzsADEuR81u4iaCW06pQgVrl.svg)](https://asciinema.org/a/tOzsADEuR81u4iaCW06pQgVrl)
