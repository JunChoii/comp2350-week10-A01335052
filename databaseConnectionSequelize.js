const is_qoddi = process.env.IS_QODDI || false;
const dbConfigQoddi =
  "mysql://freedb_junissexy:D2QGXfPpU3aq*aY@sql.freedb.tech/freedb_comp2350-week4-A01335052";
const dbConfigLocal = "mysql://root:jchoi2022@localhost/week10";
if (is_qoddi) {
  var databaseConnectionString = dbConfigQoddi;
} else {
  var databaseConnectionString = dbConfigLocal;
}
module.exports = databaseConnectionString;