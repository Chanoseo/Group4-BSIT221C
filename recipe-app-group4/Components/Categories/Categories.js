import Image from "next/image"

export default function Categories() {
    return(
        <>
            <section className="categories_section_2">
                <h1 className="categories_title">Categories</h1>
                <div className="categories_container">
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/papeta_par_eda.jpeg'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Breakfast</h1>
                    </div>
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/lentil_bolognese.jpg'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Vegan</h1>
                    </div>
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/honey_garlic_pork_chops.jpg'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Meat</h1>
                    </div>
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/buckeye_bundt_cake.jpeg'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Dessert</h1>
                    </div>
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/honey_bbq_chicken_wings.png'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Lunch</h1>
                    </div>
                    <div className="categories_contain" id='contain'>
                        <div className="categories_section_2_image">
                            <Image src={'/images/Foods/ghanaian_salad.jpeg'} width='550' height='410' className="categories_section_2_image_contain" alt="Food"/>
                        </div>
                        <h1 className="categories_section_2_categories">Salad</h1>
                    </div>
                </div>
            </section>
        </>
    )
}