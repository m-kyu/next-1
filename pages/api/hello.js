// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let data=[
  {id:1,name:'홍길동'}
];

export default function handler(req, res) {
  res.status(200).json(data)
}
