This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

![Screen Recording 2025-02-25 at 11 57 00 PM](https://github.com/user-attachments/assets/2ba0c0d5-04a7-43b6-95d7-319541e9789a)


## Getting Started

First, install dependencies locally: 
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Process
### Technologies Chosen
* NextJS/React - I chose to bootstrap my react app with NextJS. I do feel that NextJS adds unnecessary complexity for the scope of this coding exercise, but I opted for it for the following reasons:
   * Ease of NextJS' page router, should I have gotten to the extension option to route to an individual pokemon page.
   * Potential to use Server Side Rendering for individual Pokemon pages (load attributes once, better for performance) / flexibility with data fetching strategy on a component basis
   * Automatic code splitting (another performance consideration)
   * Potential to use React Suspence for loading state
   * Built in optimizations for third party scripts (performance consideration)
* TypeScript - I've run into type errors when using JS in the past, so I habitually use typescript as a precaution. I have a separate types.ts file for shared types.
* MaterialUI
    * Material's inputs are a quick way to make input code clean (don't need to specify <label> per <input>) and they're aesthetically pleasing.
    * clean loading component
    * clean alerts for error handling
    * responsiveness and accessibility are considered
    * I dynamically imported MUI components to minimize it's effect on performance.
    * Compatible with styled-components, which is my preferred CSS library
* styled-components: keeping styles in my component files is something I really enjoyed when working in Vue, it made styling each component a breeze. I kept a global css file for potential shared styles.
* lodash
     * I dynamically imported functions used to minimize effect on performance.
     * used orderBy to simplify alphabetizing my list of pokemon (array of objects)
     * also chose this for the potential to use their debounce function
* useSWR:
   * this is a react hook that was recommended on React website to simplify client-side data fetching
   * includes build-in caching
   * error handling
   * performance optimization
   * loading state
   * promotes cleaner code by abstracting away data fetching logic
* axios - I used this to create my "fetcher" for useSWR. I also used it to handle re-fetching logic upon receiving "nextPage" token.
### Technical Implementation Decisions
* I exclusively wrote functional components to make use of React Hooks.
* I created a custom hook for my search input to cleanly bind value to imput
* I created a shared types file
* Created components file for easeful separation of concerns, reusability, etc.  
   * Pokemon:
      * lazy loads PokemonList component since it does not need to be rendered immediately (performance consideration)
      * this component is memoized to avoid unnecessary rerenders because it contains the bulk of my data-fetching logic (performance consideration)
      * handles initial data fetch with useSWR and has a useEffect to hand re-fetch when given a "nextPage" tolen. I did this because useSWR limits your ability to handle request responses/chain post-requests. I would consider refactoring this given more time. But I do like that useSWR also automatically handles re-trying failed requests that aren't 404s. 
* Created api file for easy maintainability of API url. I also considered that I would need to reuse this if I got to the Pokemon detail page extension. 

## TODO: 
* Time constraint was a challenge. I time boxed 2 hours and spent a total of 2 hours and 40 minutes on this. My children and I currently have the flu so I had to step away often. I would have had more uninterrupted time otherwise. 
   * With more time, I would: 
       * make small changes with accessibilty in mind. Things I've already considered, HTML tag nesting and MaterialUI automatically adds aria labels. 
       * look into why initial page load is sometimes laggy. 
       * look into why pokemon objectd received from API didn't include a "classification" like docs suggest. I added a latin placeholder to account for this. 
       * add a toggle button to dynamically turn on chaos mode 
       * Although I did start trying to debounce my request, I would have liked to get that working. 
       * look into why API requests never returned empty array of pokemon as documentation suggested. (Empty Results returned 404 error)
       * refactor handling of nextPage
       * add tests
       * resolve eslint errors 
       * debug why lazy loading wasn't working as intended
       * be more thorough with my types
       * remove styled-components. Although, MaterialUI gives you the option between styled components and emotions upon installation, it still requires emotions as a dependency for certain components (like the text input). So I would solely choose emotions to remove unnecessary libraries. (performance consideration) 
## Takeaways 
   * The last time I created a project in NextJS and React was in 2022-- it never ceases to astound me how rapidly the landscape of tech evolves! It felt brand new and I was honestly super excited to learn about and use its new features. I have no doubt that I'll feel the same about Svelte :) 
Thank you so much for your consideration! 

   

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
