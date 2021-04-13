import app from '../app';

const { log } = console;

const { PORT } = process.env

app.listen(PORT, () => log(`⚡️ running on port ${PORT}`));
