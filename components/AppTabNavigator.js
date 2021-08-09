import BloodDonation from "../Screens/BloodDonation"
import BloodRequest from "../Screens/BloodRequest"
import {createBottomTabNavigator} from "react-navigation-tabs"

export const AppTabNavigator= createBottomTabNavigator({
DonateBlood:{
screen: BloodDonation,
navigationOptions: {
tabBarLabel: "Donate Blood"
}
},
RequestBlood: {
screen: BloodRequest,
navigationOptions: {
tabBarLabel: "Request Blood"
}
}
})
