// import React, { Component } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen'
// import { MaterialCommunityIcons, Ionicons, AntDesign, Feather } from '@expo/vector-icons';
// import { ScrollView } from 'react-native-gesture-handler';

// class ClassDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         };
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 <ImageBackground source={require('../../../assets/image/bg.png')} style={styles.backgroundImage}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                         <View style={{ flexDirection: 'row', marginTop: hp('5%'), }}>
//                             <TouchableOpacity style={styles.menu}>
//                                 <AntDesign name="arrowleft" size={27} color="#000000" style={{ marginTop: hp('0%'), }} />
//                             </TouchableOpacity>
//                             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                                 <Text style={{ fontSize: hp('2.5%'), color: '#FFFFFF' }}> Today Class </Text>
//                             </View>
//                         </View>
//                         <View style={styles.no}>
//                             <TouchableOpacity >
//                                 <Ionicons name="md-notifications-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
//                             </TouchableOpacity>
//                             <TouchableOpacity >
//                                 <MaterialCommunityIcons name="message-text-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
//                             </TouchableOpacity>
//                             <TouchableOpacity >
//                                 <Ionicons name="calendar-outline" size={24} color="#15A3AB" style={{ padding: hp('1%') }} />
//                             </TouchableOpacity>
//                         </View>
//                     </View>
//                     <ScrollView
//                         vertical={true}
//                         showsVerticalScrollIndicator={false}>
//                         <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: hp('3%'), }}>
//                             <Image source={require('../../../assets/image/Image1.png')} style={{ height: hp('30%'), width: wp('90%'), marginTop: hp('0%'), borderRadius: hp('2%') }}
//                             />
//                         </View>
//                         <View>
//                             <TouchableOpacity style={{ marginLeft: hp('1%'), height: hp('4.5%'), width: wp('20%'), backgroundColor: '#D6E523', borderRadius: hp('1%'), position: 'relative', marginTop: hp('-5.5%'), marginLeft: hp('4%'), }}>
//                                 <TouchableOpacity onPress={() => { this.props.navigation.navigate('ReportDetails') }}>
//                                     <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: '#858E1F' }}>join class</Text>
//                                 </TouchableOpacity>
//                             </TouchableOpacity>
//                         </View>
//                         <View style={{ justifyContent: 'space-around', flexDirection: 'row', marginTop: hp('1%'), }}>
//                             <TouchableOpacity>
//                                 <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>Subject Covered</Text>
//                             </TouchableOpacity>
//                             <TouchableOpacity>
//                                 <Text style={{ fontSize: hp('3%'), color: '#FFFFFF' }}>View All</Text>
//                             </TouchableOpacity>
//                         </View>
//                         <ScrollView
//                             horizontal={true}
//                             showsHorizontalScrollIndicator={false}>
//                             <View style={{ flexDirection: 'row', flex: 1 }}>
//                                 <View style={styles.cardview}>
//                                     <TouchableOpacity>
//                                         <Feather name="check-circle" size={27} color="#FF616C" style={{ marginLeft: hp('15%'), marginTop: hp('1%') }} />
//                                     </TouchableOpacity>
//                                     <Image source={require('../../../assets/image/electronic1.png')} style={{ marginTop: hp('-2%'), }}
//                                     />
//                                     <ScrollView
//                                         vertical={true}
//                                         showsVerticalScrollIndicator={false}>
//                                         <Text style={{ fontSize: hp('2%'), textAlign: 'center', marginTop: hp('1%') }}>Lorem ipsum is simply dummy text</Text>
//                                     </ScrollView>
//                                     <TouchableOpacity style={{ marginTop: hp('3%'), marginBottom: hp('1%'), marginLeft: hp('1%'), height: hp('4.5%'), width: wp('20%'), backgroundColor: '#00D5BB', borderRadius: hp('7%'), }}>
//                                         <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: '#FFF' }}>1:00:15</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={styles.cardview}>
//                                     <TouchableOpacity>
//                                         <Feather name="check-circle" size={27} color="#FF616C" style={{ marginLeft: hp('15%'), marginTop: hp('1%') }} />
//                                     </TouchableOpacity>
//                                     <Image source={require('../../../assets/image/electronic3.png')} style={{ marginTop: hp('-2%'), }}
//                                     />
//                                     <ScrollView
//                                         vertical={true}
//                                         showsVerticalScrollIndicator={false}>
//                                         <Text style={{ fontSize: hp('2%'), textAlign: 'center', marginTop: hp('1%') }}>Long established face that a reader per</Text>
//                                     </ScrollView>
//                                     <TouchableOpacity style={{ marginTop: hp('3%'), marginBottom: hp('1%'), marginLeft: hp('1%'), height: hp('4.5%'), width: wp('20%'), backgroundColor: '#00D5BB', borderRadius: hp('7%'), }}>
//                                         <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: '#FFF' }}>0:45:00</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                                 <View style={styles.cardview}>
//                                     <TouchableOpacity>
//                                         <Feather name="check-circle" size={27} color="#FF616C" style={{ marginLeft: hp('15%'), marginTop: hp('1%') }} />
//                                     </TouchableOpacity>
//                                     <Image source={require('../../../assets/image/electronic2.png')} style={{ marginTop: hp('-2%'), }}
//                                     />
//                                     <ScrollView
//                                         vertical={true}
//                                         showsVerticalScrollIndicator={false}>
//                                         <Text style={{ fontSize: hp('2%'), marginTop: hp('1%'), textAlign: 'center', }}>There are many variations of passages.There are many variations of passages</Text>
//                                     </ScrollView>
//                                     <TouchableOpacity style={{ marginTop: hp('3%'), marginBottom: hp('1%'), marginLeft: hp('1%'), height: hp('4.5%'), width: wp('20%'), backgroundColor: '#00D5BB', borderRadius: hp('7%'), }}>
//                                         <Text style={{ fontSize: hp('2%'), textAlign: 'center', color: '#FFF' }}>1:00:15</Text>
//                                     </TouchableOpacity>
//                                 </View>
//                             </View>
//                         </ScrollView>
//                         <View style={{ marginTop: hp('-1%') }}>
//                             <View>
//                                 <Text style={{ fontSize: hp('3%'), color: '#FFFFFF', marginLeft: hp('3%') }}>Overview</Text>
//                             </View>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Feather name="check-circle" size={27} color="#FFFFFF" style={{ marginLeft: hp('3%'), marginTop: hp('1%') }} />
//                                 <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', marginLeft: hp('1%'), textAlign: 'auto', marginTop: hp('1%') }}>Class by Carolyn Lauren</Text>
//                             </View>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Feather name="check-circle" size={27} color="#FFFFFF" style={{ marginLeft: hp('3%'), marginTop: hp('1%') }} />
//                                 <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', marginLeft: hp('1%'), textAlign: 'auto', marginTop: hp('1%') }}>Lorem lpsum is simply dummy text of the printing and industry</Text>
//                             </View>
//                             <View style={{ flexDirection: 'row' }}>
//                                 <Feather name="check-circle" size={27} color="#FFFFFF" style={{ marginLeft: hp('3%'), marginTop: hp('1%') }} />
//                                 <Text style={{ fontSize: hp('2%'), color: '#FFFFFF', marginLeft: hp('1%'), textAlign: 'auto', marginTop: hp('1%') }}>Class Duration - 60Sec (8 Subject cover..)</Text>
//                             </View>
//                         </View>
//                     </ScrollView>

//                 </ImageBackground>
//             </View>
//         );
//     }
// }

// export default ClassDetails;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: "cover",
//         width: wp('100%'),
//         height: hp('100 %'),
//     },
//     menu: {
//         height: hp('5%'),
//         width: wp('10%'),
//         backgroundColor: '#FFFFFF',
//         borderRadius: hp('7%'),
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: hp('2%'),
//     },
//     no: {
//         marginTop: hp('5%'),
//         flexDirection: 'row',
//         height: hp('5%'),
//         width: wp('30%'),
//         backgroundColor: '#FFFFFF',
//         borderRadius: hp('3%'),
//         alignItems: 'center',
//         marginRight: hp('2%'),
//         justifyContent: 'center'
//     },
//     cardview: {
//         flex: 1,
//         flexDirection: 'column',
//         backgroundColor: "#FFFFFF",
//         borderRadius: hp('2%'),
//         shadowOpacity: 0.5,
//         shadowRadius: 3,
//         shadowOffset: {
//             height: 0,
//             width: 0,
//         },
//         elevation: 2,
//         width: wp('40%'),
//         height: hp('30%'),
//         marginTop: hp('2%'),
//         margin: hp('1%'),
//         alignItems: 'center'

//     },
// })