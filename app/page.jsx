import Feed from "@components/Feed"

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor laudantium culpa obcaecati porro aut eaque delectus magni vel, eveniet consequatur quod itaque enim facere non blanditiis officia recusandae voluptatum?
      </p>

      <Feed />
      
    </section>
  )
}

export default Home