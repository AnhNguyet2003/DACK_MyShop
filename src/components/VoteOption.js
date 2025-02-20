// import React, { memo, useEffect, useRef, useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/AntDesign';
// import Button from './Button';
// import logo from '../../assets/logo.png';
// import { voteOptions } from '../utils/constants';

// const VoteOption = ({ productName, handleSubmitVoteOption }) => {
//     const scrollViewRef = useRef();
//     const [chooseStar, setChooseStar] = useState(null);
//     const [comment, setComment] = useState('');

//     useEffect(() => {
//         // Cuộn đến phần tử này khi component được mount
//         scrollViewRef.current.scrollTo({ y: 0, animated: true }); // Điều chỉnh y tùy theo vị trí bạn muốn cuộn đến
//     }, []);

//     return (
//         <ScrollView 
//             ref={scrollViewRef} 
//             contentContainerStyle={styles.scrollContainer} // Sử dụng contentContainerStyle
//             style={styles.container}
//         >
//             <Image source={logo} style={styles.logo} />
//             <Text style={styles.title}>{`Đánh giá sản phẩm ${productName}`}</Text>
//             <TextInput
//                 style={styles.textarea}
//                 placeholder='Thêm bình luận của bạn'
//                 value={comment}
//                 onChangeText={setComment}
//             />
//             <View style={styles.voteOptions}>
//                 <Text style={styles.voteTitle}>Bạn thấy sản phẩm thế nào?</Text>
//                 <View style={styles.stars}>
//                     {voteOptions.map((el) => (
//                         <TouchableOpacity
//                             key={el.id}
//                             onPress={() => setChooseStar(el.id)}
//                             style={styles.voteOption}
//                         >
//                             <Icon name="star" size={30} color={chooseStar >= el.id ? 'orange' : 'gray'} />
//                             <Text style={styles.voteText}>{el.text}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </View>
//             </View>
//             <Button fw name='Gửi' handleOnClick={() => handleSubmitVoteOption({ comment, star: chooseStar })} />
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     scrollContainer: {
//         alignItems: 'center', // Di chuyển thuộc tính này vào contentContainerStyle
//         paddingBottom: 20, // Có thể thêm padding nếu cần
//     },
//     container: {
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width: '100%', // Đảm bảo chiều rộng 100%
//         position: 'absolute', // Thêm thuộc tính này để nó không bị che khuất
//     },
//     logo: {
//         width: 300,
//         height: 100,
//         resizeMode: 'contain',
//         marginBottom: 20,
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 10,
//     },
//     textarea: {
//         width: '100%',
//         height: 80,
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 5,
//         padding: 10,
//         marginBottom: 10,
//     },
//     voteOptions: {
//         width: '100%',
//         alignItems: 'center',
//     },
//     voteTitle: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     stars: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//     },
//     voteOption: {
//         alignItems: 'center',
//         marginHorizontal: 10,
//     },
//     voteText: {
//         fontSize: 12,
//     },
// });

// export default memo(VoteOption);

import React, { memo, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import logo from '../../assets/logo.png'
import { voteOptions } from '../utils/constants';
import Button from './Button';

const VoteOption = ({ productName, handleSubmitVoteOption }) => {
    const [chooseStar, setChooseStar] = useState(null);
    const [comment, setComment] = useState('');

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.title}>{`Đánh giá sản phẩm ${productName}`}</Text>
            <TextInput
                style={styles.textarea}
                placeholder='Thêm bình luận của bạn'
                value={comment}
                onChangeText={setComment}
            />
            <View style={styles.voteOptions}>
                 <Text style={styles.voteTitle}>Bạn thấy sản phẩm thế nào?</Text>
                <View style={styles.stars}>
                     {voteOptions.map((el) => (
                         <TouchableOpacity
                             key={el.id}
                             onPress={() => setChooseStar(el.id)}
                             style={styles.voteOption}
                         >
                             <Icon name="star" size={30} color={chooseStar >= el.id ? 'orange' : 'gray'} />
                             <Text style={styles.voteText}>{el.text}</Text>
                         </TouchableOpacity>
                     ))}
                 </View>
             </View>
             <Button fw name='Gửi' handleOnClick={() => handleSubmitVoteOption({ comment, star: chooseStar })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFCCFF',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        width: '100%',
        position: 'absolute', 
    },
    textarea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    logo: {
        width: 350,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
    },
   
    voteOptions: {
        width: '100%',
        alignItems: 'center',
    },
    voteTitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 25
    },
    voteOption: {
        alignItems: 'center',
        marginHorizontal: 10,
    },
    voteText: {
        fontSize: 12,
    },
});

export default memo(VoteOption);