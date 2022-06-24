const puppeteer = require("puppeteer");
const fs = require("fs");

const Scraper = async () => {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  const url = "https://github.com/w3f/Grants-Program/blob/master/docs/accepted_grant_applications.md";
  await page.goto(url, { waitUntil: "domcontentloaded" });
  const acceptedapplications = await page.evaluate(() => {
    const list = [];
    let i = 0;
    Array.from(document.querySelectorAll("tbody")).map((itemtr) => {
      i++;
      Array.from(itemtr.querySelectorAll("tr")).map((item) => {
        const teamlink = item.querySelector("td:nth-child(1)").firstChild.href;
        const teamname = item.querySelector("td:nth-child(1)").innerText;
        const projname = item.querySelector("td:nth-child(2)").innerText;
        let githublink = "#";
        try {
          githublink = item.querySelector("td:nth-child(3)").firstChild.href;
        } catch (error) {}
        const terminated = item.querySelector("td:nth-child(4)").firstElementChild.firstElementChild.firstChild.checked;
        const firstdelivery = item.querySelector("td:nth-child(5)").firstElementChild.firstElementChild.firstChild.checked;
        const completed = item.querySelector("td:nth-child(6)").firstElementChild.firstElementChild.firstChild.checked;
        const tableno = i;
        list.push({ teamlink: teamlink, teamname: teamname, projname: projname, githublink: githublink, terminated: terminated, firstdelivery: firstdelivery, completed: completed, tableno: tableno });
        return "";
      });
      return "";
    });
    return list;
  });
  try {
    savedata(acceptedapplications);
  } catch (error) {
    console.log("Error Occured");
  }
  await browser.close();
};

const savedata = (data) => {
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };

  const jsondata = JSON.stringify(data);
  fs.writeFile("data.json", jsondata, finished);
};

Scraper();
