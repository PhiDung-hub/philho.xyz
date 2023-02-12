export default function Head() {
  return (
    <>
      <title>{process.env.BASE_TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Phil Ho portfolio" />
      <link rel="icon" href="/favicon_io/favicon.ico" />
    </>
  )
}
