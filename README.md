meteor-autoform-autocomplete
============================

Autocomplete inputs for [aldeed:autoform](https://github.com/aldeed/meteor-autoform) using [mizzao:autocomplete](https://github.com/mizzao/meteor-autocomplete).

## Usage ##

Get familiar with [mizzao:autocomplete](https://github.com/mizzao/meteor-autocomplete) docs.

Install the package:

```
meteor add mpowaga:autoform-autocomplete
```

Define schema like this:

```
PostsSchema = new SimpleSchema({
  /* ... */

  title: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'autocomplete-input',
        placeholder: 'Title',
        settings: // mizzao:autocomplete settings. required
      }
    }
  },

  content: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'autocomplete-textarea',
        rows: 4,
        settings: // mizzao:autocomplete settings. required
      }
    }
  }
});
```


