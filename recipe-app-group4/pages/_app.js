import "@/styles/globals.css";

//Semantic UI
import 'semantic-ui-css/semantic.min.css'

//Header and Footer
import Header from "@/Components/Constants/Header"
import Footer from "@/Components/Constants/Footer"

//Header and Footer SCSS
import "/styles/Header_Footer/header.scss"
import "/styles/Header_Footer/footer.scss"

//Hot Recipes SCSS
import "/styles/Components/hot_recipe.scss"

//Categories SCSS
import "/styles/Components/categories.scss"

//Recipes Page SCSS
import "/styles/Pages/recipes.scss"

//Contacts Page SCSS
import "/styles/Pages/contacts.scss"

//About Page SCSS
import "/styles/Pages/about.scss"

//Main Page SCSS
import "/styles/Pages/main.scss"

//Food Pages SCSS
import "/styles/Pages/food_pages.scss"

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
    <div className="app-container" id="top">
      <Header />
      <Component {...pageProps} />
      <Footer />
      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
    </>
  );
}
