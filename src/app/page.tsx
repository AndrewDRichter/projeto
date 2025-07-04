
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

async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay))
  const response = await fetch(url);
  return response.json();
}

// async function getData() {
//   // https://api.github.com/users/AndrewDRichter/repos
//   const response = await fetch("https://api.github.com/users/AndrewDRichter/repos")

//   return response.json();
// }

async function getData() {
  const data = await delayFetch("https://api.github.com/users/AndrewDRichter/repos", 2000)
  return data;
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