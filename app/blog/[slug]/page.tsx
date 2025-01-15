export default async function Page({
    params,
}: {
    params: { slug: string }
}) {
    const slug = params.slug
    return <div>My Post: {slug}</div>
}