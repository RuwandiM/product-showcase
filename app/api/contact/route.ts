import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    console.log("Contact form submission:", data);
    return res.status(200).json({ message: 'Success' });
  }
  res.status(405).end();
}
