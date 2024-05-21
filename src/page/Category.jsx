import { useParams, Link } from "react-router-dom"
import { Menu, FooterElement } from '../components'

function Category({ categories }) {
  const { category } = useParams();
  const { title, products } = categories[category] || {};

  const reversedProducts = [...products].reverse();

  const elements = reversedProducts.map((product, index) => {
    const isEvenIndex = index % 2 === 0;
    return(
      <div className={`${isEvenIndex ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex items-center lg:gap-[125px] lg:min-w-[730px]`} key={product.id}>
        <div>
          <img src={product.categoryImage.desktop} alt="" />
        </div>
        <div className="text-left">
          {product.new && (
            <p className="text-[14px] text-cream tracking-[10px] font-normal uppercase mb-4">
              New Product
            </p>
          )}
          <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.4px] uppercase">{product.name}</h2>
          <p className=" text-base w-[410px] leading-[25px] mb-10 text-black opacity-50 mt-8">
            {product.description}
          </p>
          <Link to={product.slug}>
            <button className="uppercase rounded-none bg-cream border-none text-white w-[160px] py-4 hover:bg-cream-light">
              See Product
            </button>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <header className='bg-black text-white flex items-center justify-center md:py-[98px]'>
				<h2 className='md:text-[40px] font-bold md:leading-[44px] md:tracking-[1.4px] uppercase'>
					{title}
				</h2>
			</header>
      <section className='max-container flex flex-col lg:gap-[160px] lg:py-[160px]'>
				{elements}
			</section>
      <section>
        <Menu/>
      </section>
      <FooterElement/>
    </div>
  )
}

export default Category