export default async function wait(length: number) {
    const waiting = async () => {
        await new Promise((resolve) => setTimeout(resolve, length))
    }

    return waiting
}