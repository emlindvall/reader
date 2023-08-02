## About 

Reader is an newsreader app made to help aggregate news articles from across the web into one easy-to-access place. Designed and built as a mock technical challenge for a practice job candidacy, Reader was built by a single developer over the course of approximately 8 hours. Leveraging the [News API](https://www.goperigon.com/data-solutions/news-api?utm_source=google&utm_medium=paid_search&utm_campaign=news-api&utm_content=general&gad=1&gclid=CjwKCAjw_aemBhBLEiwAT98FMgpgQEtDnjpRHMGlxvkiPVXXf_LDDOQNYrtDd1ntlbGN5cujsDKZ8RoCLn0QAvD_BwE), Reader features a central newsfeed aggregating 20 of the United States' top news articles, and allows users the ability to search for articles they're interested in and click each article for expanded details. 

---

## Set Up 

 ### Installing the repository
> - Head to the [GitHub repository]([https://github.com/streeteatz/streateatz-fe](https://github.com/emlindvall/reader)). 
> - Click the `code` drop-down menu and copy the SSH key.
> - On your local machine, open the terminal using  `⌘ + space` + `terminal` and navigate to the location you'd like the repository directory cloned to. 
> - Once you're there, run  `git clone [SSH Key] [reader]` via the command line.
> - Run `npm install`.

> ### Opening the application 
> - When you're ready to use the app, open the terminal and navigate to the `reader` directory.
> - Open a second terminal tab using `⌘ + t`.
> - In that second terminal tab, run the command `npm start` to begin running Street Eatz via local host.
> - Copy and paste the local host URL into your browser of choice.

---

## Preview 

![Preview Home Page](https://imagizer.imageshack.com/img923/3079/XAhG4b.png)

![Preview Detailed View](https://imagizer.imageshack.com/img924/7944/DbZWUq.png)

![Preview Vendor View](https://imagizer.imageshack.com/img923/4366/wFR7EV.png)

---

## Developers 

- Em Lindvall  [GitHub](https://github.com/emlindvall) | [LinkedIn](https://www.linkedin.com/in/emlindvall/)
  
---

## Context 

Reader was created during the developer's time enrolled at [Turing School of Software & Design's Front End Development program](https://frontend.turing.edu/), a four-semester, eight-month course focused on preparing students for a career as web developers working with Javascript, HTML, CSS, and the React framework. This mini-project was designed to mimic a [take-home technical challenge](https://mod4.turing.edu/projects/take_home/take_home_fe) similar to ones encountered during the job search, and accompanied a series of mock interviews. As part of the process, the developer leaned heavily on Figma for wireframing and planning, as well as GitHub Projects to track progress. 
  * [Figma](https://www.figma.com/file/riXiQCaMA9mNWARjE6sAls/reader-app-wireframe?type=design&node-id=0%3A1&mode=design&t=pU9EUzlify40bgAD-1)
  * [GitHub Project Board](https://github.com/users/emlindvall/projects/3)
---

## Goals and Challenges 

In keeping with a real-life technical take-home challenge, this project's spec was open-ended. The provided MVP was basic-- utilize the API to show a list of news articles, build in a detailed view for each article, and implement either a filter, sort, or search feature. Outside of that, each student needed to decide how else to budget their eight hours of development time. Initially, I planned for MVP and had in mind three possible project extensions: additional CSS, a save articles feature, or error handling. As the project progressed, it became clear that the latter two of those extensions would not be possible within the allotted timeframe, so I opted to implement more polished CSS styling-- that's an area of confidence for me, so I wanted to make sure that I could demonstrate my UI/UX skills. 

From a more technical standpoint, the News API returns a vast amount of data of varied quality, depending on the endpoints accessed. To keep the scope of this project manageable, I utilized the API's built-in subset of the current day's top twenty news articles from the United States. But even with a smaller pool of data, there were still challenges-- for example, not all articles have a built-in unique ID, and not every article has both an author, headline, and description. Those variations in data quality meant that I needed to find a way to alter the incoming data without the ability to post to the API, which I was able to get around with the help of the Nano ID package and local storage.

---

## Future Development Opportunities 

As mentioned, the timeline for this project was quite short. There are definitely areas where Reader could be improved, strengthened, and expanded-- the most immediate concern would be error handling, and from there I'd opt to build out the planned bookmarking feature and the ability to view bookmarked articles. Future functionality could also access different News API endpoints, allowing users to toggle between different types of news views (e.g. top, most recent, location-specific, etc). 
