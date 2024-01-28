const app = require("./app");
const { logger } = require("./shared/utils");

app.listen(2024, () => logger(`listening on port ${process.env.PORT}`));

