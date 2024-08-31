---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .date }}
author: "{{ index $.Site.Params.lang.author $.Section}}"
slug:
draft: false
toc: false
---
