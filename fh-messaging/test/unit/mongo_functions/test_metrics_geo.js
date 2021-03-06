


exports.test_metrics_geo_mongo = function (test,assert){
  var ts = new Date().getTime();
  var emit = function (data,obj){
    console.log(data,obj);
    assert.ok(data.domain == "testing","expected domain to be set");
    assert.ok(data.ts === ts,"expected timestamp to match");
    assert.ok(data.appid == "testapp");
    assert.ok(obj.ireland === 1);

  };
  var undertest = require('../../../lib/mongo_functions/metrics_geo');
  undertest.setVars(ts,emit);
  var scope = {"appid":"testapp","domain":"testing","country":{"country_name":"ireland"}};
  undertest.metrics_geo.call(scope);
  test.finish()
};
