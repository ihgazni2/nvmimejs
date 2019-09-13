# nvmime
>__nvmime__

# Introduce

    search mime name

# Install

>__npm install nvmime__


## [Usage](https://navegador5.github.io/nvmimejs/global.html#)

    npm install nvmime -g

### nvmime -l

    # nvmime -l
    <nvmime -l>    to list classes
    <nvmime regex> to search
    <nvmime regex cls> to search specific class

    classes
    [ 'application',
      'audio',
      'font',
      'image',
      'message',
      'model',
      'multipart',
      'text',
      'video' ]

### nvmime \<regex or string\>

#nvmime multipart
    <nvmime -l>    to list classes
    <nvmime regex> to search
    <nvmime regex cls> to search specific class

    { alternative: 'multipart/alternative',
      appledouble: 'multipart/appledouble',
      byteranges: 'multipart/byteranges',
      encrypted: 'multipart/encrypted',
      form_data: 'multipart/form-data',
      header_set: 'multipart/header-set',
      mixed: 'multipart/mixed',
      multilingual: 'multipart/multilingual',
      related: 'multipart/related',
      report: 'multipart/report',
      signed: 'multipart/signed',
      'vnd$bint$med_plus': 'multipart/vnd.bint.med-plus',
      voice_message: 'multipart/voice-message',
      x_mixed_replace: 'multipart/x-mixed-replace' }

### nvmime \<regex or string\> \<class\>

    # nvmime form multipart
    <nvmime -l>    to list classes
    <nvmime regex> to search
    <nvmime regex cls> to search specific class

    { form_data: 'multipart/form-data' }



## GIT
-------
  

[nvmimejs](https://github.com/navegador5/nvmimejs)


----------------------------------------------



## Dependancy
-------------

[elistjs](https://github.com/ihgazni2/elistjs)


