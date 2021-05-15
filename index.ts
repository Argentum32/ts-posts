const mainHeader = document.querySelector('.mainHeader')

let posts: post[] = []

type post = {
  id: number
  title: string
  body: string
  userId: number
}

const fetchingPosts = new Promise<post[]>(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response: any) => response.json())
    .then(data => {
      posts = data
      render(posts)
      console.log(posts)
    })
  }
)

const render = (arr: post[]) => arr.forEach(p => mainHeader!.insertAdjacentHTML('afterend', markup(p)))

function markup(p: post){
  return `
  <div>
    <h3>${p.title}</h3>
    <p>${p.body}</p>
  </div>`
}


type ObjectShape = {
  array: post[],
  key: number,
  newKeyValue: post
}

function updateObjectInArray<ObjectShape>(array: post[], key: number, newKeyValue: post): post[]{
  return array.map((i: post) => i.id === key ? {...newKeyValue, id: key} : i)
}