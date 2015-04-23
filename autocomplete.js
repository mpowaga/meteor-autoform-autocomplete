AutoForm.addInputType('autocomplete-input', {
  template: 'autoformAutocompleteInput'
});

AutoForm.addInputType('autocomplete-textarea', {
  template: 'afAutocompleteTextarea'
});

Template.__copy__('afAutocompleteInput_bootstrap3',
                  'afAutocompleteInput');
Template.__copy__('afAutocompleteTextarea_bootstrap3',
                  'afAutocompleteTextarea');

helpers = {
  attsWithValue: function (atts, value) {
    if (value) {
      atts.value = value;
    }
    return atts;
  },

  bootstrapAtts: function (atts) {
    atts['class'] = _.isString(atts['class'])
                      ? atts['class'] + ' form-control'
                      : 'form-control';
    return atts;
  },

  bootstrapAttsWithValue: function (atts, value) {
    return helpers.attsWithValue(helpers.bootstrapAtts(atts), value);
  }
};

Template.afAutocompleteInput.helpers({
  atts: function () {
    return helpers.attsWithValue(this.atts, this.value);
  }
});

Template.afAutocompleteInput_bootstrap3.helpers({
  atts: function () {
    return helpers.bootstrapAttsWithValue(this.atts, this.value);
  }
});

Template.afAutocompleteTextarea_bootstrap3.helpers({
  atts: function () {
    return helpers.bootstrapAtts(this.atts);
  }
});