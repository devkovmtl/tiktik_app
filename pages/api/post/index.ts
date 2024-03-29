// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../utils/client';
import { allPostsQuery } from '../../../utils/queries'

type Data = {
  name: string
}

export default async  function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    if(req.method === 'GET') {
        const query = allPostsQuery();
        // setup sanity client
        const data = await client.fetch(query);

        res.status(200).json(data)
    } else if(req.method === 'POST') {
      const doc = req.body;

      client.create(doc).then(() => {
        res.status(201).json('video created');
      });
    }

}
