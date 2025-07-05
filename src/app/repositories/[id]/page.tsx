
interface PageDetailProps {
    params: {
        id: string;
    }
}

async function getData(id: string) {
    const response = await fetch("https://api.github.com/users/AndrewDRichter/repos")
    return response.json();
}

export default function RepositoryId({ params }: PageDetailProps) {

    const data = getData(params.id);

    return (
        <div>
            <h1>Repo id: {params.id} page</h1>
        </div>
    )
}