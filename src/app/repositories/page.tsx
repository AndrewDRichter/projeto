"use client"
import { useEffect, useState } from "react"

interface DataProps {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
        url: string;
    }
}

export default function Repositories() {

    const [repos, setRepos] = useState<DataProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.github.com/users/AndrewDRichter/repos")
                .then(response => response.json())
                .then((data: DataProps[]) => {

                    setTimeout(() => {
                        setRepos(data);
                        setIsLoading(false);
                    }, 2000)
                })
        }

        getData();
    }, [])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <h1>Repositories page</h1>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <strong>{repo.full_name}</strong>
                    <br />
                    <br />
                </div>
            ))}
        </div>
    )
}