import axios from "axios"
import {} from "react-native-dotenv"
const newPlugin611 = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/8533/storyboard/9680/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function newplugin611_get__read(new_param) {
  return newPlugin611.get(`/`)
}
export const apiService = { newplugin611_get__read }
