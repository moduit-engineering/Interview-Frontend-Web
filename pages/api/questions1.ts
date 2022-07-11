import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  
  var config = {
    method: 'get',
    url: 'https://screening.moduit.id/frontend/web/question/one',
  };

  const response = await axios(config)
                    .then(function (response) {
                      return JSON.stringify(response.data);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

  res.status(200).send(response);

}