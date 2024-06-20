import OpenAI from "openai";
import { GPTKey } from "./constants";
const openai=new OpenAI({
    apiKey:GPTKey,
    dangerouslyAllowBrowser:true,
});
export default openai;