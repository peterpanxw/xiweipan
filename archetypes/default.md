---
title: "{{ replace .TranslationBaseName "-" " " | title }}
author: "{{ index $.Site.Params.lang.author $.Section}}"
slug:
draft: false
toc: false
---
