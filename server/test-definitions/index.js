import https from 'https';
import fetch from 'node-fetch';

const DEFAULT_SERVER = 'https://lester.dev.clover.com:3001';
const agent = new https.Agent({ rejectUnauthorized: false });

export default async (req, res) => {
  // eslint-disable-next-line no-console
  console.log('POST', '/api/test-definitions');

  try {
    const { server } = req.body;
    const url = `${server || DEFAULT_SERVER}/test-definitions`;
    const response = await fetch(url, {
      agent,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: undefined,
    });
    const json = await response.json();
    res.json(json);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
    res.status(500).json({ error: e.toString() });
  }
};
