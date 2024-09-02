---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: today
author: "{{ index $.Site.Params.lang.author $.Section}}"
slug:
draft: false
toc: false
---
