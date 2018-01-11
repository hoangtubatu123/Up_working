import {Platform, StyleSheet} from 'react-native';
import * as colorLight from './color';
import * as size from './size';
import {hei, wid} from './size';

let color = colorLight;
export const style = {
    wrapperContainer: {
        flex: 1,
        backgroundColor: color.background,
    },
    wrapperBackButton:{
        width: 50,
    },
    wrapperHeader: {
        height: 100,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperMenuHome: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderBottomColor: color.textColorNotActive
    },
    wrapperMenuTextNotActive: {
        paddingRight: 5,
        marginRight: 10,
    },
    wrapperMenuTextIsActive: {
        paddingBottom: 10,
        paddingRight: 5,
        marginRight: 10,
        borderBottomWidth: 2,
        borderBottomColor: color.textColor
    },
    wrapperCenterLeftToRightRow: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapperCenterLeftToRightColumn: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    wrapperCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperNotificationCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: color.textColor
    },
    wrapperCenterRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapperLogoInDrawer: {
        width: wid * 3 / 4,
        height: hei / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperButtonPlay: {
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: color.buttonPlay
    },
    wrapperButtonPlayInVideo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: wid,
        height: size.HEIGHT_FULL_WIDTH_IMAGE,
        position: 'absolute',
        backgroundColor: color.buttonPlay
    },
    wrapperButtonNext: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: color.buttonNext
    },
    wrapperProgress: {
        flex: 1
    },
    wrapperRowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wrapperRowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapperIconDrawer: {
        height: 30,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperFeatureBook: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapperPeople:{
        height: 70,
    },
    wrapperModalStaff:{
        width: wid * 0.8,
        height: hei * 0.4,
        borderRadius: 10,
        backgroundColor: 'rgba(47, 24, 71, 0.8)'
    },
    wrapperModalClass:{
        width: wid * 0.9,
        height: hei * 0.8,
        borderRadius: 10,
        backgroundColor: 'rgba(47, 24, 71, 0.8)'
    },
    textTitleHeader: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: size.titleHeader,
        color: color.textColor,
    },
    textTitleChart: {
        backgroundColor: color.none,
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: color.textColor,
    },
    textNotActive: {
        color: color.textColorNotActive,
        fontFamily: 'Montserrat-Regular',
        fontSize: size.defaultText,
    },
    textIstActive: {
        color: color.textColor,
        fontFamily: 'Montserrat-Regular',
        fontSize: size.defaultText,
    },
    textTitleCard: {
        color: color.textColor,
        fontFamily: 'Montserrat-Medium',
        fontSize: size.defaultText,
    },
    textTitleCardLight: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
        fontSize: size.defaultText,
    },
    textTitleCardDark: {
        color: '#000000',
        fontFamily: 'Montserrat-Medium',
        fontSize: size.defaultText,
    },
    textTitleCardBlue: {
        color: color.blue,
        fontFamily: 'Montserrat-Medium',
        fontSize: size.defaultText,
    },
    textTitleBig: {
        color: color.textColor,
        fontFamily: 'Montserrat-Medium',
        fontSize: size.titleBig,
    },
    textTitleBigLight: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Medium',
        fontSize: size.titleBig,
    },
    textTitleBigBlue: {
        color: color.blue,
        fontFamily: 'Montserrat-Medium',
        fontSize: size.titleBig,
    },
    textTitleGiant: {
        color: color.textColor,
        fontFamily: 'Montserrat-Medium',
        fontSize: size.titleGiant,
    },
    textDescriptionCard: {
        color: color.textColor,
        fontFamily: 'Montserrat-Light',
        fontSize: size.titleNormal,
        backgroundColor: color.none,
    },
    textDescriptionCardLight: {
        color: '#FFFFFF',
        fontFamily: 'Montserrat-Light',
        fontSize: size.titleNormal,
    },
    textDescriptionCardDark: {
        color: '#000000',
        fontFamily: 'Montserrat-Light',
        fontSize: size.titleNormal,
    },
    textNoteCard: {
        color: color.textColorNotActive,
        fontFamily: 'Montserrat-Light',
        fontSize: size.titleSmall,
    },
    textChart: {
        color: color.textColor,
        fontFamily: 'Montserrat-Regular',
        fontSize: size.titleSmall,
    },
    textInDrawer: {
        fontFamily: 'Montserrat-Light',
        fontSize: size.titleNormal,
        color: 'black',
    },
    textNumberChart: {
        color: color.textColor,
        fontFamily: 'Montserrat-Regular',
        fontSize: 35,
    },
    textNotification: {
        color: color.textColorReverse,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
    },
    iconGray: {
        color: '#a5a5a5',
    },
    colorTextLight: {
        color: '#FFFFFF'
    },
    iconStarStyle: {
        color: color.star,
        paddingLeft: 3
    },
    wrapperImageFeature: {
        height: hei / 3,
    },
    wrapperImageSquareBig: {
        height: wid - 40,
    },
    wrapperImageSquare: {
        height: wid / 3,
        width: wid / 3,
    },
    wrapperTextInImage: {
        padding: 10,
        flex: 1,
        position: 'absolute',
        bottom: 0

    },
    wrapperBottomChart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: color.none,
        paddingTop: 5,
        paddingRight: 5,
        paddingLeft: 5
    },
    line: {
        height: 1,
        backgroundColor: color.textColorNotActive,
    },
    wrapperImageRectangle: {
        width: wid / 3,
    },
    imageFeature: {
        height: hei / 3,
        borderRadius: 15,
        backgroundColor: color.loadingImage
    },
    imageFullWidth: {
        flex: 1,
        backgroundColor: color.loadingImage

    },
    wrapperModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperBadge:{
        height: 15,
        width: 15,
        borderRadius: 7.5,
        position: 'absolute',
        backgroundColor: 'red',
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapperRevenue: {
        justifyContent: 'flex-end',
        backgroundColor: color.blueDashboard,
        height: hei / 3,
        borderRadius: 15,
    },
    wrapperRevenueSquare: {
        justifyContent: 'space-between',
        backgroundColor: color.blueDashboard,
        borderRadius: 15,
        width: wid / 2 - 30,
        height: wid / 2 - 30
    },
    wrapperImageFullWidth: {
        backgroundColor: color.none,
        marginLeft: -20,
        marginRight: -20,
        height: size.HEIGHT_FULL_WIDTH_IMAGE
    },
    wrapperFullWidth: {
        flex: 1,
        marginLeft: -20,
        marginRight: -20,
    },
    wrapperRevenueLine: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: color.blueDashboard,
        borderRadius: 15,
        height: 40,
    },
    columnChart: {
        width: 5,
        borderRadius: 5,
        backgroundColor: color.textColor,
    },
    imageSquareBig: {
        height: wid - 40,
        borderRadius: 15,
        backgroundColor: color.loadingImage


    },
    imageCircleTiny: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: color.loadingImage
    },
    imageCircleNormal: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: color.loadingImage
    },
    imageSquare: {
        height: wid / 3,
        width: wid / 3,
        borderRadius: 15,
        backgroundColor: color.loadingImage
    },
    imageSquareSmall: {
        height: (wid - 60) / 3,
        width: (wid - 60) / 3,
        borderRadius: 15,
        backgroundColor: color.loadingImage
    },
    imageRectangleSmall: {
        width: wid / 5,
        height: wid / 5 * 1.5,
        backgroundColor: color.loadingImage
    },
    imageSquareAvatar: {
        height: wid / 5,
        width: wid / 5,
        borderRadius: 10,
        backgroundColor: color.loadingImage
    },
    imageRectangle: {
        width: wid / 3,
        height: wid / 3 * 1.5,
        backgroundColor: color.loadingImage
    },

    linearGradient: {
        padding: 20,
        paddingBottom: 0,
        paddingTop: 0,
        height: hei,
        width: wid,
    },
    contentModal: {
        flex: 1,
    },
    topModal: {
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCart: {
        borderRadius: 10,
        width: wid * 0.9,
        height: hei * 0.5,
        backgroundColor: 'rgb(255,255,255)',
    },
    linearGradientInDrawer: {
        paddingBottom: 0,
        paddingTop: 0,
        height: hei / 3,
        width: wid,
    },
    padding: {
        padding: 10
    },
    paddingTopBottom: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    paddingLeft: {
        paddingLeft: 10
    },
    paddingLR: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    paddingLine: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    paddingRight: {
        paddingRight: 10
    },
    paddingTop: {
        paddingTop: 10
    },
    paddingBottom: {
        paddingBottom: 10
    },
    noPaddingLeft: {
        paddingLeft: 0
    },
    noPadding: {
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    noPaddingRight: {
        paddingRight: 0
    },
    noPaddingTop: {
        paddingTop: 0
    },
    noPaddingBottom: {
        paddingBottom: 0
    },
    marginLeft: {
        marginLeft: 10
    },
    marginLeftFar: {
        marginLeft: 20
    },
    marginLR: {
        marginLeft: 5,
        marginRight: 5
    },
    marginRight: {
        marginRight: 10
    },
    marginRightFar: {
        marginRight: 20
    },
    marginTop: {
        marginTop: 10
    },
    marginTopFar: {
        marginTop: 20
    },
    marginBottom: {
        marginBottom: 10
    },
    marginBottomFar: {
        marginBottom: 20
    },
    noMarginLeft: {
        marginLeft: 0
    },
    noMarginRight: {
        marginRight: 0
    },
    noMarginTop: {
        marginTop: 0
    },
    noMarginBottom: {
        marginBottom: 0
    },
    marginTopBottom: {
        marginTop: 10,
        marginBottom: 10
    },
    shadow: {
        elevation: 1,
        shadowColor: color.shadowColor,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.3,
    },
    itemTabInDrawer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        backgroundColor: color.none,
        borderBottomWidth: 0,
    },
    deadlineProgress: {
        height: 5,
        borderRadius: 5,
        backgroundColor: color.textColor,
    },
    wrapperDeadline: {
        width: wid - 40,
        height: 5,
        borderRadius: 5,
        backgroundColor: color.textColorNotActive,
    },
    deadlineProgressJobAssignment: {
        width: 80,
        height: 3,
        backgroundColor: '#c50000' ,
    },
    progress: {
        height: 3,
        backgroundColor: '#c50000' ,
    },
    wrapperProgressDark: {
        height: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    wrapperProgressLight: {
        height: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    wrapperA: {
        height: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    noBackground: {
        backgroundColor: color.none
    },
    headerModal: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ffffff',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },
    bottomModal: {
        width: wid * 0.8,
        height: 50,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,
    },
    haveBorderBottom: {
        borderBottomWidth: 0.5,
        borderColor: 'rgba(214,214,214, 0.6)',
    },
    haveBorderTop: {
        borderTopWidth: 0.5,
        borderColor: 'rgba(214,214,214, 0.6)',
    },
    wrapperItemTrello: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapperBottomModule:{
        height: 50,
    },
    trelloCart: {
        borderRadius: 10,
        width: wid * 0.9,
        height: hei * 0.75,
        backgroundColor: '#f2f2f2',
    },
    contentTrello: {
        flex: 1,
        backgroundColor : 'rgb(192, 198, 209)'
    },
    wrapperItem: {
        width: wid * 0.9 - 40,
        height: 70,
        backgroundColor: '#FFF'
    },
    itemInCardTrello: {
        width: wid * 0.8,
        backgroundColor: '#ffffff',
        padding: 10,
        flex: 1
    },
    inputTheme:{
        fontSize: size.titleNormal,
        width: wid * 0.7,
    },
    colorDark:{
        color: 'black'
    },
    buttonUser:{
        padding: 3,
        borderRadius: 5,
    }

};

const general = StyleSheet.create(style);

export default (general)
