import Image from 'next/image';
import Link from 'next/link';
export default function Categories({ foods }) {
    return (
        <section className="categories_section_2">
            <h1 className="categories_title">Categories</h1>
            <div className="categories_container">
                {
                foods.map(food => (
                    <div className="categories_contain" key={food.id}>
                        <div className="categories_section_2_image">
                            <Image src={food.image} width={550} height={410} className="categories_section_2_image_contain" alt="Food" />
                        </div>
                        <Link href={'/Food_Page/' + food.id}>
                            <h1 className="categories_section_2_categories">{food.categ}</h1>
                        </Link>
                    </div>
                ))
                }
            </div>
        </section>
    );
}