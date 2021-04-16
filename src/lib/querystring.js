const keyValueString = ([key, value]) => {
  if (typeof value === "object" && !Array.isArray(value))
    throw new Error("Pelase check your params");

  return `${key}=${value}`;
};

module.exports.queryString = (obj) => {
  if (typeof obj !== "object" || Array.isArray(obj)) {
    throw new Error("The value provided must be an object");
  }
  return Object.entries(obj).map(keyValueString).join("&");
};

module.exports.parse = (string) =>
  Object.fromEntries(
    string.split("&").map((item) => {
      let [key, value] = item.split("=");
      if (value.indexOf(",") > -1) {
        value = value.split(",");
      }
      return [key, value];
    })
  );
