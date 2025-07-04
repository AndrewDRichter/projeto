
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

async function getData() {
  // https://api.github.com/users/AndrewDRichter/repos
  const response = await fetch("https://api.github.com/users/AndrewDRichter/repos")

  return response.json();
}


export default async function Home() {

  const data: DataProps[] = await getData();

  return (
    <main>
      <h1>Página Home</h1>
      <span>Seja bem-vindo!</span>
      <br />
      <h3>Meus repositórios</h3>
      {data.map((repo) => (
        <div key={repo.id}>
          <strong>{repo.full_name}</strong>
          <br />
          <br />
        </div>
      ))}
    </main>
  )
}