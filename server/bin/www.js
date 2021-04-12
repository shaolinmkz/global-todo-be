import app from '../app';

const { log } = console;

const port = process.env.PORT;

app.listen(port, () => log(`🔌 Plugged on port ${port}`));
