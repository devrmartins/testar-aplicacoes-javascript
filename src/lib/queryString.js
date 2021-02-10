export function queryString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (typeof value === "object" && !Array.isArray(value)) {
        throw new Error("Please check your input");
      }

      return `${key}=${value}`;
    })
    .join("&");
}

export function parse(qs) {
  return Object.fromEntries(
    qs.split("&").map((item) => {
      let [key, value] = item.split("=");
      if (value.indexOf(",") > -1) {
        value = value.split(",");
      }
      return [key, value];
    })
  );
}
