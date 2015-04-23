Tinytest.add('helpers - attsWithValue - include value property', function (test) {
  var atts = helpers.attsWithValue({
    foo: 'bar',
    bar: 'foo'
  }, 'baz');

  test.equal(atts.value, 'baz');
});

Tinytest.add('helpers - bootstrapAtts - add form-control class', function (test) {
  var atts = helpers.bootstrapAtts({});

  test.equal(atts['class'], 'form-control');
});

Tinytest.add('helpers - bootstrapAtts - append form-control class', function (test) {
  var atts = helpers.bootstrapAtts({
    'class': 'foo bar'
  });

  test.equal(atts['class'], 'foo bar form-control');
});

Tinytest.add('helpers - bootstrapAttsWithValue - add form-control class and value property', function (test) {
  var atts = helpers.bootstrapAttsWithValue({}, 'foobar');

  test.equal(atts['class'], 'form-control');
  test.equal(atts['value'], 'foobar');
});