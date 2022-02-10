import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import customStyles from '../styles/Styles';
import CustomText from '../custom-components/CustomText';
import { ListItem } from '../custom-components/ListItem';
import { Header } from '../custom-components/Header';
import { Footer } from '../custom-components/Footer';
import { Emergency } from '../custom-components/Emergency';
import { CustomButton } from '../custom-components/CustomButton';
import markdownFonts from '../custom-components/markDownFonts';
import Markdown from 'react-native-markdown-text';
import apiRoutes from '../../api/routes';

export const Cases = ({ navigation }) => {
  const [howCanIHelp, setHowCanIHelp] = useState([]);
  const [loading, setLoading] = useState(false);
  //MODALS
  const [Joy, setJoy] = useState(false);
  const [David, setDavid] = useState(false);
  const [Keith, setKeith] = useState(false);
  const [Dahlia, setDahlia] = useState(false);
  const [Carl, setCarl] = useState(false);
  const [Pam, setPam] = useState(false);
  const [Johnny, setJohnny] = useState(false);
  const [Pat, setPat] = useState(false);
  useEffect(() => {
    loadHowCanIHelp();
  }, []);

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('cache/cases');
      if (value !== null) {
        // We have data!!
        const test = JSON.parse(value);
        setHowCanIHelp(test.value.data);
        //console.log(test.value.data);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  const loadHowCanIHelp = async () => {
    setLoading(true);
    const response = await apiRoutes.getCases;
    setLoading(false);
    response.data != null ? setHowCanIHelp(response.data.data) : retrieveData();
    //setHowCanIHelp(response.data.data);
  };

  return (
    <View style={customStyles.mainWrapper}>
      <Header navigation={navigation} />
      <ScrollView style={customStyles.innerWrapper}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/cases-01.jpg')}
          />
        </View>
        {howCanIHelp.map((item) => (
          <View key={item.id} style={customStyles.textWrapper}>
            <Modal visible={eval(item.attributes.modalID)}>
              <ScrollView style={customStyles.modalWrapper}>
                <View style={{ paddingTop: 50, paddingHorizontal: 30 }}>
                  <View style={styles.headingWrapper}>
                    <View>
                      <Image
                        style={styles.icon}
                        source={require('../../assets/images/female_1.png')}
                      />
                    </View>
                    <View style={styles.nameWrapper}>
                      <CustomText style={styles.personName}>
                        {item.attributes.title}
                      </CustomText>
                    </View>
                  </View>
                </View>
                <View style={styles.textWrapper}>
                  <Markdown styles={markdownFonts}>
                    {item.attributes.body}
                  </Markdown>
                </View>
              </ScrollView>
              <Pressable
                onPress={() => {
                  eval('set' + item.attributes.modalID + '(false)');
                }}
                style={customStyles.modalFooter}
              >
                <CustomText style={customStyles.modalFooterTxt}>
                  Close
                </CustomText>
              </Pressable>
            </Modal>
            <View style={styles.headingWrapper}>
              <View>
                <Image
                  style={styles.icon}
                  source={require('../../assets/images/female_1.png')}
                />
              </View>
              <View style={styles.nameWrapper}>
                <CustomText style={styles.personName}>
                  {item.attributes.title}
                </CustomText>
              </View>
            </View>
            <Markdown styles={markdownFonts}>
              {item.attributes.body.substring(0, 110)}
            </Markdown>
            <View style={{ paddingBottom: 5 }}>
              <CustomButton
                onPress={() => {
                  eval('set' + item.attributes.modalID + '(true)');
                }}
              >
                <CustomText style={customStyles.buttonText}>
                  READ MORE
                </CustomText>
              </CustomButton>
            </View>
          </View>
        ))}
        <View style={{ paddingHorizontal: 30 }}>
          <Emergency />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 130,
  },
  textWrapper: {
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  headingWrapper: {
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 5,
  },
  icon: {
    height: 55,
    width: 55,
  },
  nameWrapper: {
    marginLeft: 10,
    // borderBottomColor: 'lightgrey',
    borderBottomColor: '#C1126B',
    borderBottomWidth: 3,
  },
  personName: {
    fontFamily: 'bebas-neue',
    fontSize: 45,
    color: '#C1126B',
  },
  link: {
    color: 'blue',
    fontFamily: 'poppins-semibold',
  },
  buttonWrapper: {
    paddingHorizontal: 30,
    marginBottom: 30,
  },
});
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   ScrollView,
//   Text,
//   Image,
//   ActivityIndicator,
//   Modal,
//   Linking,
//   Pressable,
//   StyleSheet,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import customStyles from '../styles/Styles';
// import { Header } from '../custom-components/Header';
// import { Footer } from '../custom-components/Footer';
// import CustomText from '../custom-components/CustomText';
// import { CustomButton } from '../custom-components/CustomButton';
// import markdownFonts from '../custom-components/markDownFonts';
// import Markdown from 'react-native-markdown-text';
// import apiRoutes from '../../api/routes';

// export const Cases = ({ navigation }) => {
//   const [Joy, setJoy] = useState(false);
//   const [David, setDavid] = useState(false);
//   const [Keith, setKeith] = useState(false);
//   const [Dahlia, setDahlia] = useState(false);
//   const [Carl, setCarl] = useState(false);
//   const [Pam, setPam] = useState(false);
//   const [Jon, setJon] = useState(false);
//   const [Pat, setPat] = useState(false);

//   return (
//     <View style={customStyles.mainWrapper}>
//       <Header navigation={navigation} />
//       <ScrollView style={customStyles.innerWrapper}>
//         <View style={styles.imageWrapper}>
//           <Image
//             source={require('../../assets/images/cases-01.jpg')}
//             style={styles.image}
//           />
//         </View>

//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             The following case studies show some of the scenarios in which
//             sexual consent is not given. The stories l highlight some of the
//             abusive behaviours that can occur in intimate relationships.
//           </CustomText>
//         </View>
//         <Modal visible={joy} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/female_1.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>JOY</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Joy and Harry have been married for 10 years. Harry is what
//                   you would call a girls’ man. He also loves to drink but gets
//                   drunk very easily. When he is drunk, which is often, he comes
//                   home late in the night (or early morning) and demands sex. Joy
//                   does not want to have sex when he is drunk and she tells him.
//                   However, he insists he has a right as a husband to have sex
//                   with her. She has stopped resisting as he keeps shouting and
//                   disturbing the neighbours. He frequently tells her she is no
//                   good and that is why he goes to other women.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Marital rape is considered a form of sexual violence in many
//                   countries. The Convention on the Elimination of All Forms of
//                   Discrimination against Women (CEDAW) notes that even in
//                   marriage men do not have the right to abuse their wives
//                   sexually, emotionally, physically or financially. Women have
//                   the right to say no to sex, regardless of their marital
//                   status. The use of alcohol or other drugs is not an excuse to
//                   abuse. Harry uses his loudmouth and criticism of Joy’s sexual
//                   ability to control her. If you are in a similar situation, you
//                   are not alone. Reach out to these Support Services which can
//                   support you in dealing with this abuse.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setJoy(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>
//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/female_1.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>JOY</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Joy and Harry have been married for 10 years. Harry is what you
//             would call a girls’ man. He also loves to drink but gets drunk very
//             easily. When he is drunk,
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setJoy(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={david} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/male_1.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>DAVID</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   David sent some naked photos of himself to his girlfriend
//                   Margaret. Some of his friends did it with their partners and
//                   they said their girlfriends found it sexy. David wanted to try
//                   it with Margaret as he found it was a fun idea. David broke up
//                   with Margaret a few months later. Margaret was upset about the
//                   break up and so she shared the pictures on WhatsApp. David is
//                   really embarrassed.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Margaret’s behaviour is a sexual offence. In sending naked
//                   photos of David without his consent, Margaret betrayed his
//                   confidence and broke the law. David should call CISOCA. He can
//                   also get help through agencies dedicated to supporting men
//                   through Support services.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setDavid(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/male_1.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>DAVID</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             David sent some naked photos of himself to his girlfriend Margaret.
//             Some of his friends did it with their partners and they said their
//             girlfriends found it sexy
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setDavid(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={keith} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/male_2.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>KEITH</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Keith and Paul broke up for almost six months. Paul called him
//                   one afternoon to come and pick up some things he had left at
//                   the house. Keith told Paul he would come by the next day. When
//                   Keith went to the house, Paul offered him a beer, which he
//                   accepted. They sat down talking for a while then Paul began
//                   nibbling Keith’s ears and then slid his hand into his pants.
//                   At first, Keith allowed him to caress him and kiss him, but
//                   then told him he was not interested in that sort of
//                   relationship with him again. Paul laughed at him and told him
//                   he can never leave him. He forced Keith to have sex with him.
//                   Keith kept telling him no, but the more he resisted the more
//                   he hurt him. He left the house bruised and feeling stupid.
//                   “Why did I go to his house?”, he asked himself. Who would
//                   believe him that Paul forced himself on him?
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Paul preyed on Keith’s trust and sexually assaulted him.
//                   Keith, like everyone, has the right to say no to sex. You can
//                   refuse to have sexual intercourse even if you consented at
//                   first. There are organizations that Keith can reach out to for
//                   support. He is not alone. If you have been sexually assaulted
//                   no matter the time frame, call CISOCA at … You can also get
//                   help through Specialized Support dedicated to supporting men
//                   who are sexually violated.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setKeith(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/male_2.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>KEITH</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Keith and Paul broke up for almost six months. Paul called him one
//             afternoon to come and pick up some things he had left at the house.
//             Keith told Paul he would come
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setKeith(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={dahlia} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/female_2.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>DAHLIA</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Dahlia has been married to Tony for one year.
//                 </CustomText>
//                 <CustomText style={customStyles.txt}>
//                   He was very caring when they were courting, and generally he
//                   still is. But, he always wants to have sex even on her period.
//                   When she tells him she doesn’t want to have sex, he gets very
//                   angry. She really does not like sex when she is on her period
//                   but she does it anyway to avoid an argument. For some time now
//                   he has been inviting his friend Bob for threesomes and Dahlia
//                   has to have sex with both of them. She went to the clinic
//                   recently and found out she contracted HIV. Paul was her first
//                   sexual partner and Bob, her second. Dahlia feels dirty, scared
//                   and alone. She loves Paul and she is afraid to say anything as
//                   he might get violent and hit her like the last time she told
//                   she was not comfortable having threesomes.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Being afraid of your husband or intimate partner and doing
//                   things you do not want to do during sexual intercourse is an
//                   indication that you are in an abusive relationship. Everyone
//                   has the right to feel safe, even if they choose to turn down
//                   having sex with their partner. Dahlia now has a sexually
//                   transmitted infection. She can find support by contacting the
//                   closest organization that supports women experiencing intimate
//                   partner violence and living with HIV through these Specialized
//                   Support services.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setDahlia(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/female_2.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>DAHLIA</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Dahlia has been married to Tony for one year.
//           </CustomText>
//           <CustomText style={customStyles.txt}>
//             He was very caring when they were courting, and generally is. But,
//             he always wants to
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setDahlia(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={carl} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/male_3.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>CARL</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Carl is a first-year student at university. This is the first
//                   time he has left his rural community to go to school in the
//                   city. It is the first time he is living on his own and making
//                   decisions for himself. Carl has a crush on second year student
//                   Dijon and was over the moon when he asked him out. They went
//                   to dinner and then to a club and had lots of alcohol to drink.
//                   Carl does not recall much of what happened but knows they left
//                   to go back to his dorm room. He vaguely recalls that Dijon
//                   took off his clothes and was kissing him. He passed out. When
//                   he woke up some time later, he was naked and in pain. Carl was
//                   very afraid. What should he do? He cannot remember all that
//                   happened.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Since Carl had blacked out, Dijon did not get his consent to
//                   have sex with him and therefore sexually abused him. Carl
//                   should call the police or reach out to support services for
//                   advice and support.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setCarl(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/male_3.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>CARL</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Carl is a first-year student at university. This is the first time
//             he has left his rural community to go to school in the city. It is
//             the first time he is living on his own
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setCarl(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={pam} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/female_3.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>PAM</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Pam and Gary have been seeing each other now for six months
//                   and they feel that they know enough about each other to start
//                   having sex. Pam and Gary decided that they were not ready to
//                   have children and so they would use a condom every time they
//                   have sexual intercourse. They decided to make love one night
//                   when Gary came over. Pam slid the condom on him using her
//                   mouth. When they were done, Pam realized that Gary had somehow
//                   removed the condom whilst they were having sex. Pam was very
//                   upset. He told her he was not comfortable using the condom. A
//                   few days later she heard a rumour that Gary had slept with
//                   many women. Pam felt used and became very concerned that she
//                   may have acquired a sexually transmitted infection or is
//                   pregnant.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   When Gary removed the condom, he did not get consent from Pam.
//                   This can be seen as a form of sexual assault. This is not OK.
//                   Pam should be concerned. If you are Pam, you should contact
//                   your primary doctor or reach out to a support organization
//                   that does STI and HIV testing to check for any potential
//                   disease. You should also get a pregnancy test done. You can
//                   also reach out to a sexual violence or domestic violence
//                   support organization for emotional support and advice.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setPam(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/female_3.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>PAM</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Pam and Gary have been seeing each other now for six months and they
//             feel that they know enough about each other to start having sex. Pam
//             and Gary decided that
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setPam(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={jon} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/male_4.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>JON</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Johnny (Jon) is a trans man who wants to start the process of
//                   transitioning. His girlfriend of many years, Alana is upset
//                   about his decision and tells her friends even though they had
//                   agreed to keep it a secret. Alana says hurtful things in front
//                   of her friends about his manhood. One evening Alana invited
//                   three of her male friends over and Jon reluctantly joined them
//                   for drinks. Before long they began to tease Jon and when he
//                   got up to leave, they grabbed him and forced him to have anal
//                   sex. Jon kept begging them to stop, but they laughed at him,
//                   telling him to take it like a man. Jon was very ashamed and
//                   was hurting really bad. He went to his room and closed the
//                   door. He felt alone.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Alana was abusive towards Jon. Jon did not consent to her
//                   telling her friends that he was transitioning and he did not
//                   consent to having anal sex with three men. Jon was sexually
//                   assaulted and should report Alana and her friends to the
//                   police. He also needs to seek medical attention quickly. Are
//                   you Jon? If you are, or you know anyone like him, you can
//                   reach out to support services for help and advice.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setJon(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/male_4.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>JON</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Johnny (Jon) is a trans man who wants to start the process of
//             transitioning. His girlfriend of many years, Alana is upset about
//             his decision and tells her friends even though
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setJon(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <Modal visible={pat} animationType='slide'>
//           <ScrollView style={customStyles.modalWrapper}>
//             <View style={{ paddingTop: 50 }}>
//               <View style={styles.headingWrapper}>
//                 <View>
//                   <Image
//                     style={styles.icon}
//                     source={require('../../assets/images/female_4.png')}
//                   />
//                 </View>
//                 <View style={styles.nameWrapper}>
//                   <CustomText style={styles.personName}>PAT</CustomText>
//                 </View>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Pat is blind and has an intellectual disability. She is
//                   totally dependent on her boyfriend Donovan for everything.
//                   Donovan always wants to have sex, but she doesn’t. Pat does
//                   not want to make Donovan upset as he is the only person who
//                   would take up a woman like her, according to Donovan’s mother.
//                   Her family has abandoned her and he is all she has, so she has
//                   stopped complaining and just does what he wants sexually.
//                 </CustomText>
//               </View>
//               <View style={customStyles.headingWrapper}>
//                 <CustomText style={customStyles.heading}>
//                   WHAT DO YOU THINK?
//                 </CustomText>
//               </View>
//               <View style={customStyles.textWrapper}>
//                 <CustomText style={customStyles.txt}>
//                   Pat is in a sexually, financially and emotionally abusive
//                   relationship. Statistics show that persons with a disability
//                   are at high risk of intimate partner violence.
//                 </CustomText>
//               </View>
//             </View>
//           </ScrollView>
//           <Pressable
//             style={customStyles.modalFooter}
//             onPress={() => setPat(false)}
//           >
//             <CustomText style={customStyles.modalFooterTxt}>Close</CustomText>
//           </Pressable>
//         </Modal>

//         <View style={styles.headingWrapper}>
//           <View>
//             <Image
//               style={styles.icon}
//               source={require('../../assets/images/female_4.png')}
//             />
//           </View>
//           <View style={styles.nameWrapper}>
//             <CustomText style={styles.personName}>PAT</CustomText>
//           </View>
//         </View>
//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             Pat is blind and has an intellectual disability. She is totally
//             dependent on her boyfriend Donovan for everything. Donovan always
//             wants to have sex, but
//           </CustomText>
//           <View style={styles.buttonWrapper}>
//             <CustomButton onPress={() => setPat(true)}>
//               <CustomText style={customStyles.buttonText}>READ MORE</CustomText>
//             </CustomButton>
//           </View>
//         </View>

//         <View style={customStyles.textWrapper}>
//           <CustomText style={customStyles.txt}>
//             If you are still confused about sexual consent, here is a video that
//             explains it in the context of ‘tea'.
//           </CustomText>
//           <CustomText style={customStyles.txt}>
//             <Text
//               style={styles.link}
//               onPress={() =>
//                 Linking.openURL('https://www.youtube.com/watch?v=pZwvrxVavnQ')
//               }
//             >
//               https://www.youtube.com/watch?v=pZwvrxVavnQ
//             </Text>
//           </CustomText>
//         </View>
//       </ScrollView>
//       <Footer navigation={navigation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imageWrapper: {
//     marginBottom: 10,
//   },
//   image: {
//     width: '100%',
//     height: 130,
//   },
//   textWrapper: {
//     paddingHorizontal: 30,
//     paddingVertical: 10,
//   },
//   headingWrapper: {
//     marginTop: 20,
//     paddingHorizontal: 30,
//     marginBottom: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconWrapper: {
//     padding: 5,
//   },
//   icon: {
//     height: 55,
//     width: 55,
//   },
//   nameWrapper: {
//     marginLeft: 10,
//     // borderBottomColor: 'lightgrey',
//     borderBottomColor: '#C1126B',
//     borderBottomWidth: 3,
//   },
//   personName: {
//     fontFamily: 'bebas-neue',
//     fontSize: 45,
//     color: '#C1126B',
//   },
//   link: {
//     color: 'blue',
//     fontFamily: 'poppins-semibold',
//   },
//   buttonWrapper: {
//     paddingHorizontal: 30,
//     marginBottom: 30,
//   },
// });

// {
//   /* <Modal visible={true} animationType='slide'>
//   <View style={customStyles.modalHeader}>
//     <Pressable onPress={() => setDomesticViolence(false)}>
//       <AntDesign name='closecircle' size={30} color='#C11E6C' />
//     </Pressable>
//   </View>
//   <ScrollView style={customStyles.modalWrapper}></ScrollView>
// </Modal> */
// }
