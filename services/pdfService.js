import puppeteer from "puppeteer";
//import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";

//console.log("Executable path:", puppeteer.executablePath());
//const chromePath = puppeteer.executablePath();
//console.log("Launching Chrome from:", chromePath);




export const generatePDF = async (bill) => {
    let browser;
    try {
        console.log("Generating PDF started");
        browser = await puppeteer.launch({ 
            
  args: chromium.args,
  headless: true,
           
        

         });
        const page = await browser.newPage();
        page.on("console", msg => {
    console.log("BROWSER LOG:", msg.text());
});

page.on("pageerror", error => {
    console.log("PAGE ERROR:", error.message);
});

page.on("requestfailed", request => {
    console.log(
        "REQUEST FAILED:",
        request.url(),
        request.failure()?.errorText
    );
});
console.log("Bill passed to PDF:", bill);
       await page.evaluateOnNewDocument((invoiceData) => {
           sessionStorage.setItem(
              'pdfInvoiceBill',
               JSON.stringify(invoiceData));
        },bill);

        const clientUrl=process.env.CLIENT_URL;
        await page.goto(`${clientUrl}`, {
    waitUntil: "domcontentloaded",
    timeout: 0,
});
        console.log("===== PDF SERVICE =====");
console.log("CLIENT_URL =", process.env.CLIENT_URL);
console.log("clientUrl =", clientUrl);
console.log("=======================");
console.log("Opening URL:", `${clientUrl}/?mode=view&pdf=true`);
        await page.goto(
            `${clientUrl}/?mode=view&pdf=true`,
            {
                waitUntil: "domcontentloaded",
                 timeout: 0,
            }
        );
       const storedBill = await page.evaluate(() => {
    return sessionStorage.getItem("pdfInvoiceBill");
});

console.log("========== DEBUG ==========");
console.log("Stored Bill:", storedBill);

// Check if React rendered the page
const html = await page.content();

console.log(
    "Contains data-pdf-ready:",
    html.includes("data-pdf-ready")
);

console.log("==========================");

        const pdf=await page.pdf({
            format:"A4",
            printBackground:true,
            margin:{
                top:"10mm",
                right:"10mm",
                bottom:"10mm",
                left:"10mm",
            },
        });
        return Buffer.from(pdf);}
        catch(error){
            console.error("PDF generation failed:",error);
            throw error;
        }finally{
            if(browser){
                await browser.close();
            }
        }
        };

export default generatePDF;