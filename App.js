import React, {Component} from 'react';
import {Component1} from 'react';
import Mybutton from './components/Mybutton';
import Mytextinput from './components/Mytextinput';
import qrcode from './components/qrcode';
import { Icon } from 'react-native-elements'
import {Platform, StyleSheet, Text, View,Button,ToastAndroid, Dimensions, ViewPagerAndroid, Alert, ScrollView, KeyboardAvoidingView, TextInput, TouchableOpacity, Linking} from 'react-native';
import { AppRegistry, Image, WebView } from 'react-native';
import {Greeting } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'menu_db.db', createFromLocation : 1});

class HomeScreen extends React.Component {
  render() {
    let pic = {
          uri: 'https://img.live/images/2019/03/22/1111.png'
    };

    return (
        <ScrollView>
        <View style={{ marginTop : 50, flex: 9, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={pic} style={{width: 350, height: 200}}/>
        <Text></Text>
        <Button
          title="            อาหารหลัก 5 หมู่             "
          onPress={() => this.props.navigation.navigate('Details')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button
          title="               ดูเมนูเเนะนำ               "
          onPress={() => this.props.navigation.navigate('Food')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button title="                   เพิ่มเมนู                   "
        onPress={() => this.props.navigation.navigate('AddFood')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button title="            คำนวณเเคลลอรี่            "
        onPress={() => this.props.navigation.navigate('Searchmenu')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button title="         แก้ไขรายการอาหาร         "
        onPress={() => this.props.navigation.navigate('Edit')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button title="         วิดิโอการทำอาหาร         "
        onPress={() => this.props.navigation.navigate('Video')}
        />

        <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
        <Button title="                สแกนqr                 "
        onPress={() => this.props.navigation.navigate('PushQR')}
        />

      </View></View></View></View></View></View></View>
      </ScrollView>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    let pic1 = {
          uri: 'https://www.img.in.th/images/ee415f4c603c6572901f515b14c40519.png'
    };
    let pic2 = {
          uri: 'https://www.img.in.th/images/357175bc0152f8de955e7e3ba43bdf56.png'
    };
    let pic3 = {
          uri: 'https://www.img.in.th/images/b52d661731e4e30037258115ceb46b94.png'
    };
    let pic4 = {
          uri: 'https://www.img.in.th/images/e3ba4603dce31a80f34d7552fb170baa.png'
    };
    let pic5 = {
          uri: 'https://www.img.in.th/images/ef060147034f89f43c4500a556d6ebe2.png'
    };
    return (
         <View style={styles.container}>
         <View style={{ marginTop : 5, flex : 1, alignItems : "center" }}>
         <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>

          <Image source={pic1} style={{width: 350, height: 240}}/>
           <Text style={{ fontSize : 15 }}>
           <Text style={{fontSize:17}}>โปรตีน</Text>{"\n"}
           {"\t"}ประกอบด้วยอาหารประเภทเนื้อสัตว์ นม ไข่ และถั่ว {"\n"}
           <Text style={{fontSize:0.01}}></Text>{"\n"}
           <Text style={{fontSize:17}}>ประโยชน์ของสารอาหารหมู่ที่ 1</Text>{"\n"}
           {"\t"}1.โปรตีนมีความจำเป็นต่อการเจริญเติบโตของร่างกาย{"\n"}
           {"\t"}2. โปรตีนช่วยซ่อมแซมเนื้อเยื่อในส่วนที่สึกหรอ{"\n"}
           {"\t"}3. โปรตีนมีอยู่ในเซลล์และหลอดเลือดจะช่วยรักษา
           {"\n"}{"\t"}{"\t"}{"\t"}ปริมาณน้ำให้อยู่ในเกณฑ์ที่มีความเหมาะสม{"\n"}
           {"\t"}4. ช่วยรักษาดุลกรด
           </Text></View>

          <View style={{ alignItems : 'center', padding : 10 }}>
          <Image source={pic2} style={{width: 350, height: 200}}/>
           <Text style={{ fontSize : 15 }}>
           <Text style={{fontSize:17}}>คาร์โบไฮเดรต</Text>{"\n"}
           {"\t"}ประกอบไปด้วยข้าว น้ำตาล แป้ง มัน และเผือก เป็นต้น{"\n"}
           <Text style={{fontSize:0.01}}></Text>{"\n"}
           <Text style={{fontSize:17}}>ประโยชน์ของสารอาหารหมู่ที่ 2</Text>{"\n"}
           {"\t"}1. มีความจำเป็นต่อการเผาผลาญไขมันในร่างกาย{"\n"}
           {"\t"}2. มีความสำคัญต่อการทำงานของสมอง{"\n"}
           {"\t"}3. โปรตีนไม่ให้เกิดการเผาผลาญเป็นพลังงาน หาก
           {"\n"}{"\t"}{"\t"}{"\t"}ร่างกายได้รับพลังงานจากคาร์โบไฮเดรตที่เพียงพอ{"\n"}
           </Text></View>

          <View style={{ alignItems : 'center', padding : 10 }}>
          <Image source={pic3} style={{width: 350, height: 200}}/>
           <Text style={{ fontSize : 15 }}>
           <Text style={{fontSize:17}}>เกลือแร่</Text>{"\n"}
           {"\t"}ประกอบไปด้วยผักต่างๆ ไม่ว่าจะเป็นตำลึง ผักกาด   ผักบุ้ง   ผักใบเขียวต่างๆ และผักชนิดอื่นๆ{"\n"}
           <Text style={{fontSize:0.01}}></Text>{"\n"}
           <Text style={{fontSize:17}}>ประโยชน์ของสารอาหารหมู่ที่ 3</Text>{"\n"}
           {"\t"}1. ช่วยในการมองเห็นของดวงตา{"\n"}
           {"\t"}2. เผาผลาญโปรตีนที่อยู่ในร่างกายให้เกิดพลังงาน{"\n"}
           {"\t"}3. มีส่วนสำคัญต่อการทำงานของเซลล์ในร่างกาย
           {"\n"}{"\t"}{"\t"}{"\t"}ไม่ว่าจะเป็นระบบประสาท ไขกระดูก หรือทางเดิน
           {"\n"}{"\t"}{"\t"}{"\t"}อาหาร
           </Text></View>

          <View style={{ alignItems : 'center', padding : 10 }}>
          <Image source={pic4} style={{width: 350, height: 200}}/>
           <Text style={{ fontSize : 15 }}>
           <Text style={{fontSize:17}}>วิตามิน</Text>{"\n"}
           {"\t"}ประกอบไปด้วยผลไม้ชนิดต่างๆ ไม่ว่าจะเป็น กล้วย ส้ม มะละกอ แอปเปิล ลำไย มังคุด และอื่นๆ{"\n"}
           <Text style={{fontSize:0.01}}></Text>{"\n"}
           <Text style={{fontSize:17}}>ประโยชน์ของสารอาหารหมู่ที่ 4</Text>{"\n"}
           {"\t"}1. ช่วยควบคุมความเป็นกรด – ด่างในร่างกาย {"\n"}
           {"\t"}2. ช่วยในการควบคุมความสมดุลของน้ำทั้งที่อยู่
           {"\n"}{"\t"}{"\t"}{"\t"}ภายในและภายนอกเซลล์{"\n"}
           {"\t"}3. มีส่วนช่วยในการเร่งปฏิกิริยาหลายชนิดที่อยู่ใน
           {"\n"}{"\t"}{"\t"}{"\t"}ร่างกายจะดำเนินไปได้นั้น ต้องมีเกลือแร่เป็นตัวเร่ง
           </Text></View>

          <View style={{ alignItems : 'center', padding : 10 }}>
          <Image source={pic5} style={{width: 350, height: 200}}/>
           <Text style={{ fontSize : 15 }}>
           <Text style={{fontSize:17}}>ไขมัน</Text>{"\n"}
           {"\t"}ประกอบไปด้วยกะทิมะพร้าว น้ำมันรำ น้ำนมถั่วเหลือง           และน้ำมันปาล์ม เป็นต้น{"\n"}
           <Text style={{fontSize:0.01}}></Text>{"\n"}
           <Text style={{fontSize:17}}>ประโยชน์ของสารอาหารหมู่ที่ 5</Text>{"\n"}
           {"\t"}1. ไขมันในปริมาณ 1 กรัมจะให้พลังงานมากถึง 9 กิโล
           {"\n"}{"\t"}{"\t"}{"\t"}แคลอรี ช่วยในการดูดซึมของวิตามินA วิตามินD
           {"\n"}{"\t"}{"\t"}{"\t"}วิตามินE และวิตามินK{"\n"}
           {"\t"}2. ไขมันจะทำให้รสชาติของอาหารถูกปากแต่ทั้งนี้ก็
           {"\n"}{"\t"}{"\t"}{"\t"}ต้องมีไขมันในปริมาณที่พอเหมาะ{"\n"}
           </Text></View>
        </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>

    );
  }
}
class FoodScreen extends React.Component{
  render() {
     let pic6 = {
          uri: 'https://uppic.cc/d/KGKU'
    };

    return (

      <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
         <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <Image source={pic6} style={{width: 350, height: 180}}/>

          <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูแกง                    "
          color = 'red'
          onPress={() => this.props.navigation.navigate('Kang')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูไข่                    "
          color = '#FF9900'
          onPress={() => this.props.navigation.navigate('Egg')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูผัด                    "
          color = '#009900'
          onPress={() => this.props.navigation.navigate('Pud')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูเส้น                    "
          color = '#330033'
          onPress={() => this.props.navigation.navigate('Noodle')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                 เครื่องดื่ม                   "
          color = '#3300CC'
          onPress={() => this.props.navigation.navigate('Drink')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="              เมนูของหวาน               "
          color = '#9933FF'
          onPress={() => this.props.navigation.navigate('Dessert')}
         />
        </View></View></View></View></View></View></View>
        </ViewPagerAndroid>

      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class Kang1 extends React.Component{
 render() {
   let pic7 = {
          uri: 'https://www.img.live/images/2019/04/28/b5485bddafa18c56.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic7} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>

          <Button
          title="               แกงเขียวหวาน                "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย           240  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                   แกงเลียง                      "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย              119  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 แกงไตปลา                    "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                 50  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                แกงมัสมั่นไก่                 "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                 325  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                แกงจืดมะระ                   "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                  90  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="  แกงเขียวหวานลูกชิ้นปลากกราย   "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                   240  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                แกงขี้เหล็ก                   "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                    195  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="       แกงส้มชะอมไข่ใส่กุ้ง         "
          color = 'red'
          onPress={() => Alert.alert('1 ถ้วย                    270  calories')
          }
          />

          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class Egg1 extends React.Component{
 render() {
    let pic8 = {
              uri: 'https://www.img.live/images/2019/04/28/a80ca07ae5e50392.png'
        };
      return (
      <View style={styles.container}>
          <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
           <ViewPagerAndroid initialPage={ 0 }
           style={{ flex : 1, width : "100%", height : 100 }}>
           <View style={{ alignItems : "center", padding : 10 }}>
           <ScrollView>
           <Image source={pic8} style={{width: 345, height: 180}}/>

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="                  ไข่เจียว                   "
            color = '#FF9900'
            onPress={() => Alert.alert('1 จาน                  216  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="                   ไข่ตุ๋น                     "
            color = '#FF9900'
            onPress={() => Alert.alert('1 ถ้วย                  75  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
             title="                    ไข่ต้ม                    "
             color = '#FF9900'
             onPress={() => Alert.alert('1 ฟอง                 105  calories')
             }
             />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="                    ไข่ดาว                   "
            color = '#FF9900'
            onPress={() => Alert.alert('1 ฟอง                   215  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="                 ไข่ลูกเขย                 "
            color = '#FF9900'
            onPress={() => Alert.alert('1 จาน                  205  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
             title="                 ไข่ยัดไส้                 "
             color = '#FF9900'
            onPress={() => Alert.alert('1 จาน                  310  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="              ไข่นกกระทา              "
            color = '#FF9900'
            onPress={() => Alert.alert('1 ฟอง                  191  calories')
            }
            />

            <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
            <Button
            title="                  ไข่หงส์                  "
            color = '#FF9900'
            onPress={() => Alert.alert('1 ฟอง                  58  calories')
            }
            />

            </View></View></View></View></View></View></View></View>
            </ScrollView>
            </View>
            </ViewPagerAndroid>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
            </View></View></View>
                );
            }
          }
class Pud1 extends React.Component{
 render() {
    let pic9 = {
          uri: 'https://www.img.live/images/2019/04/28/51fc09031a838b85.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic9} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  ผัดผักบุ้ง                   "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   210  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                   ผัดพริก                    "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   200  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ผัดกระเพรา                "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   510  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 ผัดไข่เค็ม                  "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   240  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="          ผัดคะน้าหมูกรอบ             "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   670  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="          ผัดกะหล่ำปลีหมู             "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                   230  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             ผัดกุ้งสตอหมู                "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                  200  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             ผัดไข่หน่อไม้                "
          color = '#009900'
          onPress={() => Alert.alert('1 จาน                  200  calories')
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class Noodle1 extends React.Component{
 render() {
   let pic10 = {
          uri: 'https://www.img.in.th/images/606b73effe129ca2ffeadafd86e10926.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic10} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  ก๋วยเตี๊ยวไก่                   "
          color = '#330033'
          onPress={() => Alert.alert('1 ถ้วย                  320  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                     สปาเก็ตตี้                   "
          color = '#330033'
          onPress={() => Alert.alert('1 จาน                  430  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 ขนมจีนน้ำยา                 "
          color = '#330033'
          onPress={() => Alert.alert('1 จาน                   90  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                        ราเม็ง                       "
          color = '#330033'
          onPress={() => Alert.alert('1 ถ้วย                   656  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      ราดหน้า                    "
          color = '#330033'
          onPress={() => Alert.alert('1 จาน                   327  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      ยำม่าม่า                    "
          color = '#330033'
          onPress={() => Alert.alert('1 ถ้วย                   215  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="           บะหมี่กรอบราดหน้า           "
          color = '#330033'
          onPress={() => Alert.alert('1 จาน                   515  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             บะหมี่เกี๊ยวเป็ดย่าง             "
          color = '#330033'
          onPress={() => Alert.alert('1 ถ้วย                   415  calories')
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class Dessert1 extends React.Component{
 render() {
   let pic12 = {
          uri: 'https://www.img.in.th/images/1342efe7fe94eac201e8fb12d4091022.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic12} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ขนมปังสอดไส้                 "
          color = '#9933FF'
          onPress={() => Alert.alert('1 ชิ้น                   285  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                     ขนมครก                     "
          color = '#9933FF'
          onPress={() => Alert.alert('1 คู่                   92  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                    ขนมตาล                    "
          color = '#9933FF'
          onPress={() => Alert.alert('1 กระทง                   48  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                    ครัวซองต์                    "
          color = '#9933FF'
          onPress={() => Alert.alert('1 ชิ้น                   235  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                บัวลอยไข่หวาน               "
          color = '#9933FF'
          onPress={() => Alert.alert('1 ถ้วย                   300  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="               ข้าวเหนียวมะม่วง              "
          color = '#9933FF'
          onPress={() => Alert.alert('1 จาน                   350  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                         โดนัท                       "
          color = '#9933FF'
          onPress={() => Alert.alert('1 ชิ้น                   270  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      บิงชูเกาหลี                   "
          color = '#9933FF'
          onPress={() => Alert.alert('1 แก้ว                   300  calories')
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class Drink1 extends React.Component{
 render() {
   let pic11 = {
          uri: 'https://www.img.live/images/2019/04/28/d7819f638f81a383.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic11} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  ชาเย็น                   "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   319  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                   กาแฟ                   "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   317  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ชามะนาว               "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   100  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                น้ำอัดลม                "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   240  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ชาดำเย็น               "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   103  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                แตงโมปั่น               "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   140  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 น้ำส้มคั้น                "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   160  calories')
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  โอเลี้ยง                "
          color = '#3300CC'
          onPress={() => Alert.alert('1 แก้ว                   102  calories')
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class AddFood1 extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      menu_name: '',
      menu_cal: '',
    };
  }
  add_menu = () => {
      var that = this;
      const { menu_name } = this.state;
      const { menu_cal } = this.state;
      alert(menu_name, menu_cal);
      if (menu_name) {
        if (menu_cal) {
           db.transaction(function(tx) {
              tx.executeSql(
                'INSERT INTO tbl_menu (menu_name, menu_cal) VALUES (?,?)',
                [menu_name, menu_cal],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'เพิ่มเมนูสำเร็จ',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            that.props.navigation.navigate('HomeScreen'),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('เพิ่มเมนูไม่สำเร็จ');
                  }
                }
              );
            });
          } else {
            alert('โปรดใส่เเคลลอรี่');
          }
        } else {
          alert('โปรดใส่เมนู');
        }
      };
 render() {
     let pic88 = {
               uri: 'https://img.live/images/2019/03/22/1111.png'
         };
     return (
       <View style={{ backgroundColor: '#d4ffaa', flex: 1 }}>
       <Text></Text>
       <Text></Text>
       <Text></Text>
       <Text></Text>
         <Image source={pic88} style={{width: 350, height: 200}}/>
         <ScrollView keyboardShouldPersistTaps="handled">
           <KeyboardAvoidingView
             behavior="padding"
             style={{ flex: 1, justifyContent: 'space-between' }}>
             <Mytextinput
               placeholder="ใส่เมนูอาหาร"
               onChangeText={menu_name => this.setState({ menu_name })}
               style={{ padding:10 }}
             />
             <Mytextinput
               placeholder="ใส่จำนวณเเคลลอรี่"
               onChangeText={menu_cal => this.setState({ menu_cal })}
               maxLength={10}
               keyboardType="numeric"
               style={{ padding:10 }}
             />

             <Mybutton
               title="เพิ่ม"
               customClick={this.add_menu.bind(this)}
             />
           </KeyboardAvoidingView>
         </ScrollView>
       </View>
     );
   }
 }
  class Searchmenu1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input_menu_name: '',
        userData: '',
      };
    }
    searchMenu = () => {
      const { input_menu_name } = this.state;
      console.log(this.state.input_menu_name);
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM tbl_menu where menu_name= ?',
          [input_menu_name],
          (tx, results) => {
            var len = results.rows.length;
            console.log('len', len);
            if (len > 0) {
              this.setState({
                userData: results.rows.item(0),
              });
            } else {
              alert('ไม่มีเมนูนั้นอยู่ในรายการอาหาร');
              this.setState({
                userData: '',
              });
            }
          }
        );
      });
    };
    render() {
       let pic99 ={
              uri: 'https://www.img.live/images/2019/04/28/6.gif'
       }
        return (
         <View style={{ backgroundColor: '#d4ffaa', flex: 1 }}>
         <Text></Text>
         <Text></Text>
         <Text style={{ fontSize : 30}}>{"\t"}{"\t"}{"\t"}{"\t"}หาเเคลลอรี่</Text>
          <Mytextinput
              placeholder="ใส่ชื่อเมนูอาหาร"
              onChangeText={input_menu_name => this.setState({ input_menu_name})}
              style={{ padding:10 }}
            />
            <Mybutton
              title="ค้นหา"
              customClick={this.searchMenu.bind(this)}
            />
            <View style={{ marginLeft: 35, marginRight: 35, marginTop: 15 }}>
            <Text style ={{fontSize:20}}>ชื่ออาหาร: {this.state.userData.menu_name}</Text>
            <Text style ={{fontSize:20}}>จำนวณเเคลลอรี่: {this.state.userData.menu_cal}</Text>
            <View style={{ marginTop : 45, flex : 1, alignItems : "center" }}>
            <Image source={pic99} style={{width: 300, height: 215}}/>
           </View>
          </View></View>
        );
      }
    }
class Edit1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_menu_name: '',
      menu_name: '',
      menu_cal: '',

    };
  }
  searchMenu = () => {
    const {input_menu_name} =this.state;
    console.log(this.state.input_menu_name);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM tbl_menu where menu_name = ?',
        [input_menu_name],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).menu_cal);
            this.setState({
             menu_name:results.rows.item(0).menu_name,
            });
            this.setState({
             menu_cal:results.rows.item(0).menu_cal,
            });

          }else{
            alert('ไม่มีเมนูนั้นในรายการอาหาร');
            this.setState({
              menu_name:'',
              menu_cal:'',

            });
          }
        }
      );
    });
  };
  updateMenu = () => {
    var that=this;
    const { input_menu_name } = this.state;
    const { menu_name } = this.state;
    const { menu_cal } = this.state;
    if (menu_name){
      if (menu_cal){
        db.transaction((tx)=> {
            tx.executeSql(
              'UPDATE tbl_menu set menu_name=?, menu_cal=?  where menu_name=?',
              [menu_name, menu_cal, input_menu_name],
              (tx, results) => {
                console.log('Results',results.rowsAffected);
                if(results.rowsAffected>0){
                  Alert.alert( 'Success', 'อัพเดทเมนูสำเร็จ',
                    [
                      {text: 'Ok', onPress: () => that.props.navigation.navigate('HomeScreen')},
                    ],
                    { cancelable: false }
                  );
                }else{
                  alert('อัพเดทเมนูไม่สำเร็จ');
                }
              }
            );
          });
        }else{
        alert('โปรดใส่เเคลลอรี่');
      }
    }else{
      alert('โปรดใส่ชื่อเมนู');
    }
  };

  render() {
    let pic77 = { uri: 'https://sv1.picz.in.th/images/2019/05/02/wwev8D.png'
        };
    return (
      <View style={{ backgroundColor: '#d4ffaa', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="ใส่เมนู "
              style={{ padding:10 }}
              onChangeText={input_menu_name => this.setState({ input_menu_name })}
            />
            <Mybutton
              title="ค้นหา"
              customClick={this.searchMenu.bind(this)}
            />
            <Mytextinput
              placeholder="ชื่อเมนู"
              value={this.state.menu_name}
              style={{ padding:10 }}
              onChangeText={menu_name => this.setState({ menu_name })}
            />
            <Mytextinput
              placeholder="จำนวณเเคลลอรี่"
              value={''+ this.state.menu_cal}
              onChangeText={menu_cal => this.setState({ menu_cal })}
              maxLength={10}
              style={{ padding:10 }}
              keyboardType="numeric"
            />

            <Mybutton
              title="อัพเดท เมนู"
              customClick={this.updateMenu.bind(this)}

            />
          </KeyboardAvoidingView>
        <View style={{ marginTop : 30, flex : 1, alignItems : "center" }}>
        <Image source={pic77} style={{width: 350, height: 350}}/>
      </View>
      </ScrollView>
      </View>
    );
  }
}
class Video1 extends React.Component{
  render() {
     let pic6 = {
          uri: 'https://uppic.cc/d/KGKU'
    };

    return (

      <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
         <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <Image source={pic6} style={{width: 350, height: 180}}/>

          <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูแกง                    "
          color = 'red'
          onPress={() => this.props.navigation.navigate('VideoKang')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูไข่                    "
          color = '#FF9900'
          onPress={() => this.props.navigation.navigate('VideoEgg')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูผัด                    "
          color = '#009900'
          onPress={() => this.props.navigation.navigate('VideoPud')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                   เมนูเส้น                    "
          color = '#330033'
          onPress={() => this.props.navigation.navigate('VideoNoodle')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
          <Button
          title="                 เครื่องดื่ม                   "
          color = '#3300CC'
          onPress={() => this.props.navigation.navigate('VideoDrink')}
        />

        <View style={{ marginTop : 15, flex : 1, alignItems : "center" }}>
        <Button
         title="              เมนูของหวาน               "
         color = '#9933FF'
         onPress={() => this.props.navigation.navigate('VideoDessert')}
        />
        </View></View></View></View></View></View></View>
        </ViewPagerAndroid>

      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}class VideoKang1 extends React.Component{
  render() {
    let pic7 = {
           uri: 'https://www.img.live/images/2019/04/28/b5485bddafa18c56.png'
     };
      return (
      <View style={styles.container}>
          <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
           <ViewPagerAndroid initialPage={ 0 }
           style={{ flex : 1, width : "100%", height : 100 }}>
           <View style={{ alignItems : "center", padding : 10 }}>
           <ScrollView>
           <Image source={pic7} style={{width: 345, height: 180}}/>

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>

           <Button
           title="               แกงเขียวหวาน                "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=eeGIrnqV7J8")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="                   แกงเลียง                      "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=pB3XqaOjmNM")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="                 แกงไตปลา                    "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=AdZdvMa4Et4")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="                แกงมัสมั่นไก่                 "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=MnbGucmcN2o")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="                แกงจืดมะระ                   "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=fE07TXKEaD4")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title=" แกงเขียวหวานลูกชิ้นปลากกราย "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=JxlJ5p4suig")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="                แกงขี้เหล็ก                   "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=ofSUZcCYiCQ")
           }
           />

           <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
           <Button
           title="       แกงส้มชะอมไข่ใส่กุ้ง         "
           color = 'red'
           onPress={() => Linking.openURL("https://www.youtube.com/watch?v=IAvaXQGTU5s")
           }
           />

           </View></View></View></View></View></View></View></View>
           </ScrollView>
           </View>
           </ViewPagerAndroid>
       <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
       </View></View></View>
     );
   }
 }
 class VideoEgg1 extends React.Component{
  render() {
     let pic8 = {
               uri: 'https://www.img.live/images/2019/04/28/a80ca07ae5e50392.png'
         };
       return (
       <View style={styles.container}>
           <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
            <ViewPagerAndroid initialPage={ 0 }
            style={{ flex : 1, width : "100%", height : 100 }}>
            <View style={{ alignItems : "center", padding : 10 }}>
            <ScrollView>
            <Image source={pic8} style={{width: 345, height: 180}}/>

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="                  ไข่เจียว                   "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=_SXdMYghPLw")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="                   ไข่ตุ๋น                     "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=pqOSKvEDFv8")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
              title="                  ไข่พะโล้                  "
              color = '#FF9900'
              onPress={() => Linking.openURL("https://www.youtube.com/watch?v=e7firMQLbSA")
              }
              />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="                  ยำไข่ต้ม                 "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=fvAHgKJCewA")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="                 ไข่ลูกเขย                 "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=NcxzhITLuYI")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
              title="                 ไข่ยัดไส้                 "
              color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=nYztnsqKyTM")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="               ยำไข่ดาว                "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=t98anjNZ5Oc")
             }
             />

             <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
             <Button
             title="            ยำไข่เยี่ยวม้า             "
             color = '#FF9900'
             onPress={() => Linking.openURL("https://www.youtube.com/watch?v=wn5Jf3oOnws")
             }
             />

             </View></View></View></View></View></View></View></View>
             </ScrollView>
             </View>
             </ViewPagerAndroid>
             <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
             </View></View></View>
                 );
             }
           }
class VideoPud1 extends React.Component{
 render() {
    let pic9 = {
          uri: 'https://www.img.live/images/2019/04/28/51fc09031a838b85.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic9} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="                  ผัดผักบุ้ง                   "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=2r1dmH4B4oQ")
          }
          />

          <View style={{marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="                   ผัดพริก                    "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=8EKQ0VcqDgQ")
          }
          />

          <View style={{ marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="                ผัดกระเพรา                "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=noQTuNaSItI")
          }
          />

          <View style={{ marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="                 ผัดไข่เค็ม                  "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=N_k4ETpWliY")
          }
          />

          <View style={{ marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="          ผัดคะน้าหมูกรอบ             "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=TuH_cSBZZsc")
          }
          />

          <View style={{ marginTop : 25,flex : 1, alignItems : "center" }}>
          <Button
          title="          ผัดกะหล่ำปลีหมู             "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=JuTmrtZkSSo")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             ผัดกุ้งสตอหมู                "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Pmi1WD5uzXg")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             ผัดไข่หน่อไม้                "
          color = '#009900'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=DKQ4oKJMD2E")
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class VideoNoodle1 extends React.Component{
 render() {
   let pic10 = {
          uri: 'https://www.img.in.th/images/606b73effe129ca2ffeadafd86e10926.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic10} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  ก๋วยเตี๊ยวไก่                   "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=1MwSG36S660")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                     สปาเก็ตตี้                   "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=bkMFerlrnUM")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 ขนมจีนน้ำยา                 "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=37xpe47CH-I")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                        ราเม็ง                       "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=lGlhRKGtWuA")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      ราดหน้า                    "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=o4m9nplRzKw")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      ยำม่าม่า                    "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=DebtpL1sJcQ")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="           บะหมี่กรอบราดหน้า           "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=SkMYnah0eMc")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="             บะหมี่เกี๊ยวเป็ดย่าง             "
          color = '#330033'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=D_I6SsE9CQc")
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class VideoDrink1 extends React.Component{
 render() {
   let pic11 = {
          uri: 'https://www.img.live/images/2019/04/28/d7819f638f81a383.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic11} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  ชาเย็น                   "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=xuPMdBWzfy4")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                   กาแฟ                   "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=9VtSRkEJVJ0")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ชามะนาว               "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Cxk7uU8ffhA")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="        สตรอเบอรี่โยเกริต         "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=8ciRajKGm7I")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ชาดำเย็น               "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=grWOBe0zIu0")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                แตงโมปั่น               "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=ARoLFBXPsS8")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                 น้ำส้มคั้น                "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=MFcH5nVMDQE")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                  โอเลี้ยง                "
          color = '#3300CC'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=LbEbcEVb6To")
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
class VideoDessert1 extends React.Component{
 render() {
   let pic12 = {
          uri: 'https://www.img.in.th/images/1342efe7fe94eac201e8fb12d4091022.png'
    };
     return (
     <View style={styles.container}>
         <View style={{ marginTop : 0.5, flex : 1, alignItems : "center" }}>
          <ViewPagerAndroid initialPage={ 0 }
          style={{ flex : 1, width : "100%", height : 100 }}>
          <View style={{ alignItems : "center", padding : 10 }}>
          <ScrollView>
          <Image source={pic12} style={{width: 345, height: 180}}/>

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                ขนมปังสอดไส้                 "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=WzbhSmUgdoc")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                     ขนมครก                     "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=Iyin_vCJsb0")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                    ขนมตาล                    "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=kvvauFhtGy8")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                    ครัวซองต์                    "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=qPpOzYXM6XU")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                บัวลอยไข่หวาน               "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=pjXJanqt3nI")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="               ข้าวเหนียวมะม่วง              "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=sTY8F_g4iHU")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                         โดนัท                       "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=3Zce5Vl0Sjo")
          }
          />

          <View style={{ marginTop : 25, flex : 1, alignItems : "center" }}>
          <Button
          title="                      บิงชูเกาหลี                   "
          color = '#9933FF'
          onPress={() => Linking.openURL("https://www.youtube.com/watch?v=kxlCi36ubyA")
          }
          />
          </View></View></View></View></View></View></View></View>
          </ScrollView>
          </View>
          </ViewPagerAndroid>
      <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
      </View></View></View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Food : FoodScreen,
    AddFood: AddFood1,
    Searchmenu: Searchmenu1,
    Edit: Edit1,
    Video: Video1,
    VideoKang: VideoKang1,
    VideoEgg: VideoEgg1,
    VideoPud: VideoPud1,
    VideoNoodle: VideoNoodle1,
    VideoDrink: VideoDrink1,
    VideoDessert: VideoDessert1,
    Kang: Kang1,
    Egg: Egg1,
    Pud: Pud1,
    Noodle: Noodle1,
    Drink: Drink1,
    Dessert: Dessert1,
    PushQR: qrcode,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#666699',
  }

  })


