import * as types from '../../Constants/actionTypes'

export function getData() {
    return {
        type: types.GET_NEWS,
        news: [

            {
                "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
        ]
    }
}


export function getDataShiftRegister() {
    return {
        type: types.GET_DATA_SHIFT_REGISTER,
        shift_register: [
            {
                date: "Thứ hai - 18/12/2016",
                shifts: [
                    {
                        id: 4883,
                        name: "Ca 1",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ hai - 18/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4884,
                        name: "Ca 2",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ hai - 18/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4885,
                        name: "Ca 3",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ hai - 18/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4886,
                        name: "Ca 4",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ hai - 18/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4887,
                        name: "Ca 5",
                        user: {
                            id: 5063,
                            name: "Lê Khánh Linh",
                            color: "00bcd4",
                            avatar_url: "https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg"
                        },
                        date: "Thứ hai - 18/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Thứ ba - 19/12/2016",
                shifts: [
                    {
                        id: 4893,
                        name: "Ca 1",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ ba - 19/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4894,
                        name: "Ca 2",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ ba - 19/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4895,
                        name: "Ca 3",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ ba - 19/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4896,
                        name: "Ca 4",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ ba - 19/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4897,
                        name: "Ca 5",
                        user: {
                            id: 6082,
                            name: "Đào Đỗ Hoài Nam",
                            color: "12134F",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510080062ft9a7VvbQaW49Zz.jpg"
                        },
                        date: "Thứ ba - 19/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Thứ tư - 20/12/2016",
                shifts: [
                    {
                        id: 4903,
                        name: "Ca 1",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ tư - 20/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4904,
                        name: "Ca 2",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ tư - 20/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4905,
                        name: "Ca 3",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ tư - 20/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4906,
                        name: "Ca 4",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ tư - 20/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4907,
                        name: "Ca 5",
                        user: {
                            id: 6082,
                            name: "Đào Đỗ Hoài Nam",
                            color: "12134F",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510080062ft9a7VvbQaW49Zz.jpg"
                        },
                        date: "Thứ tư - 20/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Thứ năm - 21/12/2016",
                shifts: [
                    {
                        id: 4913,
                        name: "Ca 1",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ năm - 21/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4914,
                        name: "Ca 2",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ năm - 21/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4915,
                        name: "Ca 3",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ năm - 21/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4916,
                        name: "Ca 4",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ năm - 21/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4917,
                        name: "Ca 5",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ năm - 21/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Thứ sáu - 22/12/2016",
                shifts: [
                    {
                        id: 4923,
                        name: "Ca 1",
                        user: {
                            id: 3290,
                            name: "Nguyễn Minh ",
                            color: "c0ca33",
                            avatar_url: "http://cdn.playbuzz.com/cdn/8903d858-fabb-4e76-b60a-254719a7e593/44203791-c3dc-4ec8-8d0a-9542826f8f5f.jpg"
                        },
                        date: "Thứ sáu - 22/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4924,
                        name: "Ca 2",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ sáu - 22/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4925,
                        name: "Ca 3",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ sáu - 22/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4926,
                        name: "Ca 4",
                        user: {
                            id: 6083,
                            name: "Vũ Hà Thu",
                            color: "009688",
                            avatar_url: "http://blog.univ-angers.fr/mariong/files/2016/04/malala-yousafzai-2.jpg"
                        },
                        date: "Thứ sáu - 22/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4927,
                        name: "Ca 5",
                        user: {
                            id: 3331,
                            name: "Lý Hà Thanh",
                            color: "F62359",
                            avatar_url: "https://media.toofab.com/2017/04/13/macgyver-tristan-may-main-480x360.jpg"
                        },
                        date: "Thứ sáu - 22/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Thứ bảy - 23/12/2016",
                shifts: [
                    {
                        id: 4933,
                        name: "Ca 1",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ bảy - 23/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4934,
                        name: "Ca 2",
                        user: {
                            id: 1947,
                            name: "Lan Hương",
                            color: "78CEFF",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Thứ bảy - 23/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4935,
                        name: "Ca 3",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Thứ bảy - 23/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4936,
                        name: "Ca 4",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Thứ bảy - 23/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4937,
                        name: "Ca 5",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Thứ bảy - 23/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            },
            {
                date: "Chủ nhật - 24/12/2016",
                shifts: [
                    {
                        id: 4943,
                        name: "Ca 1",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Chủ nhật - 24/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "09:00",
                        end_time: "12:00"
                    },
                    {
                        id: 4944,
                        name: "Ca 2",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Chủ nhật - 24/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "12:00",
                        end_time: "14:00"
                    },
                    {
                        id: 4945,
                        name: "Ca 3",
                        user: {
                            id: 6079,
                            name: "Phương Na",
                            color: "8bc34a",
                            avatar_url: "http://timedotcom.files.wordpress.com/2017/04/time-100-2017-emma-stone.jpg?quality=85&crop=0px%2C197px%2C1988px%2C1988px&resize=600%2C600&strip&zoom=2"
                        },
                        date: "Chủ nhật - 24/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "14:00",
                        end_time: "17:00"
                    },
                    {
                        id: 4946,
                        name: "Ca 4",
                        user: {
                            id: 5063,
                            name: "Lê Khánh Linh",
                            color: "00bcd4",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Chủ nhật - 24/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "17:00",
                        end_time: "19:00"
                    },
                    {
                        id: 4947,
                        name: "Ca 5",
                        user: {
                            id: 5063,
                            name: "Lê Khánh Linh",
                            color: "00bcd4",
                            avatar_url: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto"
                        },
                        date: "Chủ nhật - 24/12/2016",
                        week: 1,
                        gen: {
                            name: "32"
                        },
                        base: {
                            name: "Cơ sở 1",
                            address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                        },
                        start_time: "19:00",
                        end_time: "21:00"
                    }
                ]
            }
        ],
    }
}

export function getDataShiftSession() {
    return {
        type: types.GET_DATA_SHIFT_SESSION,
        shift_sessions: [
            {
                id: 1,
                name: "Ca 1",
                start_time: "09:00:00",
                end_time: "12:00:00",
                active: 1
            },
            {
                id: 2,
                name: "Ca 2",
                start_time: "12:00:00",
                end_time: "14:00:00",
                active: 1
            },
            {
                id: 3,
                name: "Ca 3",
                start_time: "14:00:00",
                end_time: "17:00:00",
                active: 1
            },
            {
                id: 4,
                name: "Ca 4",
                start_time: "17:00:00",
                end_time: "19:00:00",
                active: 1
            },
            {
                id: 5,
                name: "Ca 5",
                start_time: "19:00:00",
                end_time: "21:00:00",
                active: 1
            }
        ]
    }
}

export function getDataEmailForm() {
    return {
        type: types.GET_DATA_EMAIL_FORM,
        email_forms: [
            {
                id: 3,
                name: "Xác nhận đăng kí thành công khoá học Photoshop",
                title: "Xác nhận đăng kí thành công khoá học Photoshop",
                subtitle: "SHARE TÀI LIỆU",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506587484zaOHLgWzZEAB4Yv.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506751231dsvj6oT3iDmJAAm.jpg",
                title_button: "Tải sách ngay",
                link_button: "https://drive.google.com/drive/u/1/my-drive",
                status: 1,
                hide: 0,
                can_delete: true
            },
            {
                id: 5,
                name: "Email Marketing",
                title: "Chia sẻ kiến thức về Logo",
                subtitle: "Logo là một hình ảnh đại diện cho thương hiệu",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15067537391BLbwNJ6LbagbbP.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506754222JRYnycSolpqMJI3.jpg",
                title_button: "Xem thêm",
                link_button: "http://colorme.vn/post/khi-nao-can-thiet-ke-lai-logo-22092",
                status: 1,
                hide: 0,
                can_delete: true
            },
            {
                id: 6,
                name: "Từ anh Hùng - Cảm ơn Hoà vì sự cố gắng không ngừng",
                title: "Từ anh Hùng - Cảm ơn Hoà vì sự cố gắng không ngừng",
                subtitle: "Bấm vào nút dưới để nghe bài hát trong lúc đọc email nhé",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506913668Gp2avFqSKCSi7oC.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506913773oivBuTSvfiBqgyo.jpg",
                title_button: "Nghe bài hát",
                link_button: "https://www.youtube.com/watch?v=NVOTHBjk-MM",
                status: 0,
                hide: 1,
                can_delete: true
            },
            {
                id: 7,
                name: "Từ anh Hùng - Cố lên Mine Linh nhé",
                title: "Từ anh Hùng - Cố lên Mine Linh nhé",
                subtitle: "Bấm vào nút dưới để nghe bài hát trong lúc đọc email nhé",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15069154199QBWNeSyvVbsfh2.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15069154240u8ErIljau12QML.jpg",
                title_button: "Nghe bài hát",
                link_button: "https://www.youtube.com/watch?v=la0-5QFLr14",
                status: 0,
                hide: 1,
                can_delete: true
            },
            {
                id: 8,
                name: "Từ Hùng - Cảm ơn Nhân vì đã đưa colorME đến ngày hôm nay",
                title: "Từ Hùng - Cảm ơn Nhân vì đã đưa colorME đến ngày hôm nay",
                subtitle: "Bấm vào nút dưới để nghe bài hát trong lúc đọc email nhé",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506917139XUSzgJDMBsO8Tf7.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506917144vqaBt89gOC6TruQ.jpg",
                title_button: "Nghe bài hát",
                link_button: "https://www.youtube.com/watch?v=6gRiWWcBKvs",
                status: 0,
                hide: 1,
                can_delete: true
            },
            {
                id: 9,
                name: "Từ Hùng - Xin lỗi Nhi, vì chưa bao giờ cảm ơn Nhi",
                title: "Từ Hùng - Xin lỗi Nhi, vì chưa bao giờ cảm ơn Nhi",
                subtitle: "Click nút bên dưới để nghe bài hát này khi đọc email nhé",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506919250jQHWDs9ALpZFmm3.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506919256sGUWAft6f6dqoNg.jpg",
                title_button: "Nghe bài hát này nhé",
                link_button: "https://www.youtube.com/watch?v=acvIVA9-FMQ",
                status: 0,
                hide: 1,
                can_delete: true
            },
            {
                id: 15,
                name: " [Cải thiện thiết kế slide] 5.11.2016",
                title: "EBOOK: CẢI THIỆN THIẾT KẾ SLIDE",
                subtitle: "ColorME thân gửi tặng bạn cuốn Ebook",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510030238qqfWUz84gS8rpNg.jpg",
                creator: {
                    id: 313,
                    name: "Huyền Trang",
                    email: "huyentrang@colorme.vn",
                    created_at: "2016-02-28 22:56:05",
                    updated_at: "2016-11-05 18:15:20",
                    role: 2,
                    code: "",
                    avatar_url: "d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                    cover_url: "",
                    description: "",
                    university: "Đại học Ngoại Thương",
                    work: "",
                    address: "185 Chùa Láng Đống Đa, Hà Nội",
                    username: "hohuyentrang258",
                    phone: "0849587867",
                    how_know: "Người quen",
                    facebook: "Facebook.com/Sunnyni.7",
                    dob: "1997-08-25",
                    gender: "2",
                    money: 0,
                    status: 0,
                    avatar_name: null,
                    cover_name: null,
                    order: 0,
                    role_id: 18,
                    is_request_cv: 0,
                    cv_url: "",
                    cv_id: 0,
                    color: "4caf50",
                    base_id: 3,
                    marital: 1,
                    homeland: "",
                    literacy: 1,
                    start_company: "2016-02-13 00:00:00",
                    age: 20,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510030311fPhEncnEgEY0Mdh.jpg",
                title_button: "Download tại đây",
                link_button: "https://drive.google.com/file/d/0B6YVK1HvpsNtMnpsVnRaWm80cDQ/view?usp=sharing",
                status: 1,
                hide: 0,
                can_delete: true
            },
            {
                id: 16,
                name: " [Bộ 5000 slides] 18.11.2016",
                title: "BỘ TEMPLATE 5000 SLIDES",
                subtitle: "ColorME thân gửi tặng bạn",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15109763912qKQFUR0gY14X75.jpg",
                creator: {
                    id: 313,
                    name: "Huyền Trang",
                    email: "huyentrang@colorme.vn",
                    created_at: "2016-02-28 22:56:05",
                    updated_at: "2016-11-05 18:15:20",
                    role: 2,
                    code: "",
                    avatar_url: "d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                    cover_url: "",
                    description: "",
                    university: "Đại học Ngoại Thương",
                    work: "",
                    address: "185 Chùa Láng Đống Đa, Hà Nội",
                    username: "hohuyentrang258",
                    phone: "0849587867",
                    how_know: "Người quen",
                    facebook: "Facebook.com/Sunnyni.7",
                    dob: "1997-08-25",
                    gender: "2",
                    money: 0,
                    status: 0,
                    avatar_name: null,
                    cover_name: null,
                    order: 0,
                    role_id: 18,
                    is_request_cv: 0,
                    cv_url: "",
                    cv_id: 0,
                    color: "4caf50",
                    base_id: 3,
                    marital: 1,
                    homeland: "",
                    literacy: 1,
                    start_company: "2016-02-13 00:00:00",
                    age: 20,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510976572NUqR9mVVrlaAind.jpg",
                title_button: "TÌM HIỂU THÊM",
                link_button: "colorme.vn/courses/313/14",
                status: 1,
                hide: 0,
                can_delete: true
            },
            {
                id: 17,
                name: "Xác nhận đăng kí thành công khoá học",
                title: "Xác nhận đăng kí thành công khoá học [[COURSE_NAME]]",
                subtitle: "Chào mừng bạn đến với khoá học [[COURSE_NAME]] của colorME",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511690494mYbt69vkMgKI5hn.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511755890mC9pdXqGTaiZSZD.jpg",
                title_button: "Trang chủ",
                link_button: "http://colorme.vn",
                status: 1,
                hide: 0,
                can_delete: false
            },
            {
                id: 18,
                name: "Xác nhận đơn đặt hàng mua sách",
                title: "Xác nhận đơn đặt hàng mua sách",
                subtitle: "Xác nhận đơn đặt hàng mua sách",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511691076sROSLI5Z6DDsJHw.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511691081ICPM5QrYUBWGofQ.jpg",
                title_button: " ",
                link_button: " ",
                status: 1,
                hide: 0,
                can_delete: false
            },
            {
                id: 19,
                name: "Xác nhận thanh toán khoá học thành công",
                title: "Xác nhận thanh toán khoá học thành công khoá học [[COURSE_NAME]]",
                subtitle: "Chào mừng [[USER_NAME]] đến với colorME",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511692061LYwngcAE9sfch3q.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511757698tQssKHPf93MoVYl.jpg",
                title_button: "Trang chủ",
                link_button: "http://colorme.vn",
                status: 1,
                hide: 0,
                can_delete: false
            },
            {
                id: 20,
                name: "Thư chào tạm biệt",
                title: "Thư chào tạm biệt học viên [[USER_NAME]]",
                subtitle: "Chúng ta sẽ còn gặp lại nhau nữa, [[USER_NAME]] nhé!",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511692237uzVTd9jwgBVhbIs.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15117598387qIvfli0GYNqlKr.jpg",
                title_button: "Trang chủ",
                link_button: "http://colorme.vn",
                status: 1,
                hide: 0,
                can_delete: false
            },
            {
                id: 21,
                name: "Thông báo khai giảng lớp học",
                title: "Thông báo khai giảng lớp học [[CLASS_NAME]]",
                subtitle: "Sắp đến ngày khai giảng khoá học [[COURSE_NAME]] rồi, [[USER_NAME]] đã sẵn sàng chưa!",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15116923825UnzEghpOzKlmp7.jpg",
                creator: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    email: "hung@hotmail.com",
                    created_at: "2016-02-11 04:03:36",
                    updated_at: "2016-12-16 14:32:21",
                    role: 2,
                    code: "",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    description: "",
                    university: "FPT University",
                    work: "1684026343",
                    address: "Dong Da",
                    username: "hung",
                    phone: "01684026343",
                    how_know: "",
                    facebook: ".",
                    dob: "2016-09-14",
                    gender: "1",
                    money: 1745161000,
                    status: 0,
                    avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                    cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                    order: 2,
                    role_id: 9,
                    is_request_cv: 1,
                    cv_url: "",
                    cv_id: 103,
                    color: "009688",
                    base_id: 3,
                    marital: 0,
                    homeland: "",
                    literacy: 0,
                    start_company: "0000-00-00 00:00:00",
                    age: 0,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1511759278kgkriCyEXKRIUNb.jpg",
                title_button: "Xem khoá học",
                link_button: "[[COURSE_URL]]",
                status: 1,
                hide: 0,
                can_delete: false
            },
            {
                id: 23,
                name: " [Thiết kế Tập sự ] 2.12.2016",
                title: "THIẾT KẾ TẬP SỰ",
                subtitle: "ColorME thân gửi tặng bạn",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1512212430kY8KdUnyPKmnAMZ.jpg",
                creator: {
                    id: 313,
                    name: "Huyền Trang",
                    email: "huyentrang@colorme.vn",
                    created_at: "2016-02-28 22:56:05",
                    updated_at: "2016-11-05 18:15:20",
                    role: 2,
                    code: "",
                    avatar_url: "d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                    cover_url: "",
                    description: "",
                    university: "Đại học Ngoại Thương",
                    work: "",
                    address: "185 Chùa Láng Đống Đa, Hà Nội",
                    username: "hohuyentrang258",
                    phone: "0849587867",
                    how_know: "Người quen",
                    facebook: "Facebook.com/Sunnyni.7",
                    dob: "1997-08-25",
                    gender: "2",
                    money: 0,
                    status: 0,
                    avatar_name: null,
                    cover_name: null,
                    order: 0,
                    role_id: 18,
                    is_request_cv: 0,
                    cv_url: "",
                    cv_id: 0,
                    color: "4caf50",
                    base_id: 3,
                    marital: 1,
                    homeland: "",
                    literacy: 1,
                    start_company: "2016-02-13 00:00:00",
                    age: 20,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1512212443MSY5Gc2E3PSwpUg.jpg",
                title_button: "TÌM HIỂU THÊM",
                link_button: "colorme.vn/courses/313/14",
                status: 1,
                hide: 0,
                can_delete: true
            },
            {
                id: 24,
                name: " [Câu chuyện về Logo ] 8.12.2016",
                title: "EBOOK CÂU CHUYỆN VỀ LOGO",
                subtitle: "ColorME thân gửi tặng bạn",
                logo_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1512662708Uy4MnGajZSZF8Tw.jpg",
                creator: {
                    id: 313,
                    name: "Huyền Trang",
                    email: "huyentrang@colorme.vn",
                    created_at: "2016-02-28 22:56:05",
                    updated_at: "2016-11-05 18:15:20",
                    role: 2,
                    code: "",
                    avatar_url: "d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                    cover_url: "",
                    description: "",
                    university: "Đại học Ngoại Thương",
                    work: "",
                    address: "185 Chùa Láng Đống Đa, Hà Nội",
                    username: "hohuyentrang258",
                    phone: "0849587867",
                    how_know: "Người quen",
                    facebook: "Facebook.com/Sunnyni.7",
                    dob: "1997-08-25",
                    gender: "2",
                    money: 0,
                    status: 0,
                    avatar_name: null,
                    cover_name: null,
                    order: 0,
                    role_id: 18,
                    is_request_cv: 0,
                    cv_url: "",
                    cv_id: 0,
                    color: "4caf50",
                    base_id: 3,
                    marital: 1,
                    homeland: "",
                    literacy: 1,
                    start_company: "2016-02-13 00:00:00",
                    age: 20,
                    deleted_at: null,
                    type: null,
                    department_id: 0
                },
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1512662712aIpmJVj3JlryGiK.jpg",
                title_button: "TÌM HIỂU THÊM",
                link_button: "colorme.vn/courses/313/14",
                status: 1,
                hide: 0,
                can_delete: true
            }
        ],
    }
}

export function getDataCampaign() {
    return {
        type: types.GET_DATA_CAMPAIGN,
        campaigns: [
            {
                id: 149,
                url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9d09b842112717.5607131ca485f.jpg",
                name: "NHỮNG CONCEPT THIẾT KẾ SLIDES",
                subject: "NHỮNG CONCEPT THIẾT KẾ SLIDES",
                owner: {
                    id: 313,
                    name: "Huyền Trang",
                    phone: "0849587867",
                    email: "huyentrang@colorme.vn",
                    color: "4caf50",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg"
                },
                send_status: 1,
                open: 36,
                sended: 70,
                complaint: 0,
                delivery: 69,
                hide: 0,
                timer: "2016-12-15 13:01:00",
                form_id: 25,
                subscribers_list_ids: [
                    157
                ],
                total: 70
            },
            {
                id: 148,
                url: "https://s-i.huffpost.com/gen/1365583/images/o-EBOOK-facebook.jpg",
                name: "EBOOK CÂU CHUYỆN VỀ LOGO",
                subject: "ColorME gửi tặng Ebook Câu Chuyện về Logo",
                owner: {
                    id: 313,
                    name: "Huyền Trang",
                    phone: "0849587867",
                    email: "huyentrang@colorme.vn",
                    color: "4caf50",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg"
                },
                send_status: 1,
                open: 145,
                sended: 224,
                complaint: 0,
                delivery: 218,
                hide: 0,
                timer: "2016-12-08 00:25:00",
                form_id: 24,
                subscribers_list_ids: [
                    156
                ],
                total: 224
            },
            {
                id: 147,
                url: "https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Operations/Our%20Insights/The%20expanding%20role%20of%20design%20in%20creating%20an%20end%20to%20end%20customer%20experience/Expanding-role-of-design-1536x1536-400_Standard.ashx",
                name: "THIẾT KẾ TẬP SỰ",
                subject: "ColorME gửi tặng Ebook Thiết kế Tập sự",
                owner: {
                    id: 313,
                    name: "Huyền Trang",
                    phone: "0849587867",
                    email: "huyentrang@colorme.vn",
                    color: "4caf50",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg"
                },
                send_status: 1,
                open: 319,
                sended: 499,
                complaint: 0,
                delivery: 482,
                hide: 0,
                timer: "2016-12-02 23:45:00",
                form_id: 23,
                subscribers_list_ids: [
                    155
                ],
                total: 499
            },
            {
                id: 145,
                url: "https://i.ytimg.com/vi/wPbylymgQEs/maxresdefault.jpg",
                name: " Cải thiện thiết kế slide",
                subject: "CẢI THIỆN THIẾT KẾ SLIDE",
                owner: {
                    id: 313,
                    name: "Huyền Trang",
                    phone: "0849587867",
                    email: "huyentrang@colorme.vn",
                    color: "4caf50",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg"
                },
                send_status: 1,
                open: 114,
                sended: 165,
                complaint: 0,
                delivery: 159,
                hide: 0,
                timer: "2016-11-09 08:12:00",
                form_id: 15,
                subscribers_list_ids: [
                    152
                ],
                total: 165
            },
            {
                id: 140,
                url: "http://sailbeforesunset.com/wp-content/uploads/2016/05/ebooks_2.jpg",
                name: "Share Ebook",
                subject: "Share Ebook]24.10.2016",
                owner: {
                    id: 1966,
                    name: "Phan Minh Dương",
                    phone: "0865189796",
                    email: "phanminhduong@hotmail.com",
                    color: "ff9800",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507360610guklUlpMsW7DnlW.jpg"
                },
                send_status: 1,
                open: 803,
                sended: 1084,
                complaint: 0,
                delivery: 1050,
                hide: 0,
                timer: "2016-10-24 17:03:00",
                form_id: 14,
                subscribers_list_ids: [
                    141
                ],
                total: 1084
            },
            {
                id: 134,
                url: "https://media.istockphoto.com/photos/paint-explosion-picture-id170955250?k=6&m=170955250&s=612x612&w=0&h=EdRJNMtUrKY9_lgnv3sCUrozMjs3Ys8g9EJfa12Jg4A=",
                name: "COLOR - MÀU SẮC TRONG THIẾT KẾ",
                subject: "COLOR - MÀU SẮC TRONG THIẾT KẾ",
                owner: {
                    id: 313,
                    name: "Huyền Trang",
                    phone: "0849587867",
                    email: "huyentrang@colorme.vn",
                    color: "4caf50",
                    avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg"
                },
                send_status: 1,
                open: 146,
                sended: 2826,
                complaint: 0,
                delivery: 2794,
                hide: 0,
                timer: "2016-10-24 12:40:00",
                form_id: 14,
                subscribers_list_ids: [
                    141
                ],
                total: 1084
            },

        ],
    }
}

export function getDataEmailTemplate() {
    return {
        type: types.GET_DATA_EMAIL_TEMPLATE,
        email_templates: [
            {
                id: 1,
                name: "Simple White",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email1.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 2,
                name: "Rounded Header",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email2.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 3,
                name: "Ueno",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email3.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 4,
                name: "Uber",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email4.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 5,
                name: "Soapbox",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email5.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 6,
                name: "Digital Ocean",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email6.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 7,
                name: "Handbook",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email7.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            },
            {
                id: 8,
                name: "Live",
                thumbnail_url: "http://s3-ap-southeast-1.amazonaws.com/keetool/emailTemplate/email8.jpg",
                owner: {
                    id: 2,
                    name: "Nguyễn Việt Hùng"
                }
            }
        ],
    }
}

export function getDataSubscribersList() {
    return {
        type: types.GET_DATA_SUBSCRIBER_LIST,
        subscribers_list: [
            {
                id: 157,
                url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9d09b842112717.5607131ca485f.jpg",
                name: "EBOOK NHỮNG CONCEPT THIẾT KẾ SLIDES",
                created_at: "12:32, 15 Tháng M. hai, 2016",
                updated_at: "12:32, 15 Tháng M. hai, 2016",
                total_subscribers: 70
            },
            {
                id: 156,
                url: "https://www.seoclerk.com/pics/551103-1TOqFD1502285018.jpg",
                name: "CÂU CHUYỆN LOGO",
                created_at: "00:15, 8 Tháng M. hai, 2016",
                updated_at: "00:15, 8 Tháng M. hai, 2016",
                total_subscribers: 224
            },
            {
                id: 155,
                url: "http://cdn-media-2.lifehack.org/wp-content/files/2015/06/Designer-struggles.jpg",
                name: "THIẾT KẾ TẬP SỰ",
                created_at: "18:10, 2 Tháng M. hai, 2016",
                updated_at: "18:10, 2 Tháng M. hai, 2016",
                total_subscribers: 499
            },
            {
                id: 154,
                url: "https://thumbs.dreamstime.com/b/design-team-planning-new-project-43728909.jpg",
                name: "Share tài liệu giao tiếp căn bản",
                created_at: "15:24, 25 Tháng M. một, 2016",
                updated_at: "15:24, 25 Tháng M. một, 2016",
                total_subscribers: 2
            },
            {
                id: 134,
                url: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/24775079_1833924343494956_8984112638279743187_n.jpg?oh=3e62fbc197222119f28c9debba93e85c&oe=5AC8EF48",
                name: "[SHARE] Tạp chí Graphics đợt 2",
                created_at: "12:49, 1 Tháng Tám, 2016",
                updated_at: "12:49, 1 Tháng Tám, 2016",
                total_subscribers: 183
            }
        ],
    }
}

export function getDataSubscriber() {
    return {
        type: types.GET_DATA_SUBSCRIBER,
        subscriber: [
            {
                id: 49172,
                email: "vuminhtriet2901@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49180,
                email: "queanhvuha811@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49164,
                email: "vuquocthuy123@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49173,
                email: "Nguyentiennn05072001@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49181,
                email: "vohoang2411@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49165,
                email: "thhuytiennn234@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49166,
                email: "vhcanhkiengiang@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49174,
                email: "vuvykg2002@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49182,
                email: "luuviethuy1999@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49167,
                email: "vu.phuongtu1006@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49175,
                email: "baohantranhuynh@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49183,
                email: "duongraphic@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49168,
                email: "hungfreeruner@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49176,
                email: "Hoangthuytiennn22@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49184,
                email: "cukien2709@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49160,
                email: "dinhhoangtiennn211099@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49169,
                email: "manhdatmata@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49177,
                email: "Kimthanh.dhkt@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49185,
                email: "duongnobi9x@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49161,
                email: "tuongminh1106@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49170,
                email: "Thienphu167@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49178,
                email: "ibestzed@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49162,
                email: "joshuang.hcm@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49171,
                email: "hdung249@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49179,
                email: "nhlanhuong281@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49163,
                email: "quachcongluc@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49157,
                email: "Hoatran.hvnh@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49158,
                email: "hanhngan1702@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49159,
                email: "vovutuanbao@hotmail.com",
                name: null,
                created_at: "12:33, 15 Tháng M. hai, 2016",
                updated_at: "12:33, 15 Tháng M. hai, 2016"
            },
            {
                id: 49013,
                email: "abbymorgan1d@hotmail.com",
                name: null,
                created_at: "18:11, 2 Tháng M. hai, 2016",
                updated_at: "18:11, 2 Tháng M. hai, 2016"
            },
            {
                id: 48997,
                email: "Tahonghanh99@hotmail.com",
                name: null,
                created_at: "18:11, 2 Tháng M. hai, 2016",
                updated_at: "18:11, 2 Tháng M. hai, 2016"
            },
            {
                id: 48733,
                email: "vyngotuong0110@hotmail.com",
                name: null,
                created_at: "10:16, 18 Tháng M. một, 2016",
                updated_at: "10:16, 18 Tháng M. một, 2016"
            },
            {
                id: 48395,
                email: "minhtuan12041999@hotmail.com",
                name: null,
                created_at: "10:16, 18 Tháng M. một, 2016",
                updated_at: "10:16, 18 Tháng M. một, 2016"
            },
            {
                id: 48415,
                email: "lynkliz27@hotmail.com",
                name: null,
                created_at: "10:16, 18 Tháng M. một, 2016",
                updated_at: "10:16, 18 Tháng M. một, 2016"
            },
            {
                id: 48341,
                email: "haiduongcu@hotmail.com",
                name: null,
                created_at: "10:16, 18 Tháng M. một, 2016",
                updated_at: "10:16, 18 Tháng M. một, 2016"
            },
            {
                id: 48178,
                email: "linhct1230@hotmail.com",
                name: null,
                created_at: "10:16, 18 Tháng M. một, 2016",
                updated_at: "10:16, 18 Tháng M. một, 2016"
            },
            {
                id: 48016,
                email: "phuchungviup@hotmail.com",
                name: null,
                created_at: "16:51, 6 Tháng M. một, 2016",
                updated_at: "16:51, 6 Tháng M. một, 2016"
            },
            {
                id: 47964,
                email: "h.phongg.ygjm2010@hotmail.com",
                name: null,
                created_at: "16:51, 6 Tháng M. một, 2016",
                updated_at: "16:51, 6 Tháng M. một, 2016"
            },
            {
                id: 47926,
                email: "kieutrinh.vu1234@hotmail.com",
                name: null,
                created_at: "16:51, 6 Tháng M. một, 2016",
                updated_at: "16:51, 6 Tháng M. một, 2016"
            }
        ],
    }
}

export function getDataSummary() {
    return {
        type: types.GET_DATA_SUMMARY,
        summary_marketing_campaign: [
            {
                total_registers: 132,
                campaign: {
                    id: 7,
                    name: "Event",
                    color: "43a047"
                },
                saler: {
                    id: 26,
                    name: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                    color: "e91e63"
                }
            },
            {
                total_registers: 60,
                campaign: {
                    id: 7,
                    name: "Event",
                    color: "43a047"
                },
                saler: {
                    id: 313,
                    name: "Huyền Trang",
                    color: "4caf50"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 7,
                    name: "Event",
                    color: "43a047"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 7,
                    name: "Event",
                    color: "43a047"
                },
                saler: {
                    id: 4234,
                    name: "Nghiêm Thanh Bình",
                    color: ""
                }
            },
            {
                total_registers: 10,
                campaign: {
                    id: 7,
                    name: "Event",
                    color: "43a047"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 164,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 34,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 313,
                    name: "Huyền Trang",
                    color: "4caf50"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 16,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 4323,
                    name: "Trần Phương Quỳnh",
                    color: "d16100"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                total_registers: 16,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 41,
                campaign: {
                    id: 9,
                    name: "FB Ads",
                    color: "f4511e"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 9,
                    name: "FB Ads",
                    color: "f4511e"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 9,
                campaign: {
                    id: 9,
                    name: "FB Ads",
                    color: "f4511e"
                },
                saler: {
                    id: 4323,
                    name: "Trần Phương Quỳnh",
                    color: "d16100"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 9,
                    name: "FB Ads",
                    color: "f4511e"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 9,
                    name: "FB Ads",
                    color: "f4511e"
                },
                saler: {
                    id: 6084,
                    name: "Công Đức",
                    color: "EC1E3E"
                }
            },
            {
                total_registers: 826,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 171,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 275,
                    name: "Vũ Thùy Dung",
                    color: "1e88e5"
                }
            },
            {
                total_registers: 192,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 56,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 299,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 2957,
                    name: "Trần Thu Trang",
                    color: "9a30b2"
                }
            },
            {
                total_registers: 194,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                total_registers: 353,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 4253,
                    name: "Trần Thanh",
                    color: "e91e63"
                }
            },
            {
                total_registers: 213,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 4323,
                    name: "Trần Phương Quỳnh",
                    color: "d16100"
                }
            },
            {
                total_registers: 69,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 267,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                total_registers: 10,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 7,
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                },
                saler: {
                    id: 7699,
                    name: "Lê thị Như Quỳnh",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 351,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 185,
                    name: "Nguyễn Thanh Diễm",
                    color: "fb8c00"
                }
            },
            {
                total_registers: 38,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 275,
                    name: "Vũ Thùy Dung",
                    color: "1e88e5"
                }
            },
            {
                total_registers: 13,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 835,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 131,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                total_registers: 9,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                total_registers: 83,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 4253,
                    name: "Trần Thanh",
                    color: "e91e63"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                total_registers: 43,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                total_registers: 14,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 6082,
                    name: "Đào Đỗ Hoài Nam",
                    color: "12134F"
                }
            },
            {
                total_registers: 16,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                total_registers: 15,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 6084,
                    name: "Công Đức",
                    color: "EC1E3E"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 11,
                    name: "Telesale",
                    color: "ffa000"
                },
                saler: {
                    id: 7699,
                    name: "Lê thị Như Quỳnh",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 136,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 124,
                    name: "Nguyễn Anh Đức",
                    color: ""
                }
            },
            {
                total_registers: 41,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 275,
                    name: "Vũ Thùy Dung",
                    color: "1e88e5"
                }
            },
            {
                total_registers: 10,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 313,
                    name: "Huyền Trang",
                    color: "4caf50"
                }
            },
            {
                total_registers: 30,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 64,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 787,
                    name: "Nguyễn Anh Kiệt",
                    color: "7cb342"
                }
            },
            {
                total_registers: 83,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 41,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 2957,
                    name: "Trần Thu Trang",
                    color: "9a30b2"
                }
            },
            {
                total_registers: 63,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                total_registers: 37,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 4122,
                    name: "Thái Phương Linh",
                    color: "795548"
                }
            },
            {
                total_registers: 42,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 4253,
                    name: "Trần Thanh",
                    color: "e91e63"
                }
            },
            {
                total_registers: 50,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 4323,
                    name: "Trần Phương Quỳnh",
                    color: "d16100"
                }
            },
            {
                total_registers: 37,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 5006,
                    name: "Nguyễn Thị Minh Châu",
                    color: "ff9800"
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                total_registers: 7,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 15,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                total_registers: 16,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 6082,
                    name: "Đào Đỗ Hoài Nam",
                    color: "12134F"
                }
            },
            {
                total_registers: 23,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 6084,
                    name: "Công Đức",
                    color: "EC1E3E"
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 7490,
                    name: "Nguyễn Như Nguyễn",
                    color: ""
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 12,
                    name: "Văn phòng",
                    color: "fb8c00"
                },
                saler: {
                    id: 7699,
                    name: "Lê thị Như Quỳnh",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 13,
                    name: "Youtube",
                    color: "0288d1"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 14,
                    name: "Email ",
                    color: "00acc1"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 14,
                    name: "Email ",
                    color: "00acc1"
                },
                saler: {
                    id: 275,
                    name: "Vũ Thùy Dung",
                    color: "1e88e5"
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 14,
                    name: "Email ",
                    color: "00acc1"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 14,
                    name: "Email ",
                    color: "00acc1"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 12,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 787,
                    name: "Nguyễn Anh Kiệt",
                    color: "7cb342"
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 9,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 4122,
                    name: "Thái Phương Linh",
                    color: "795548"
                }
            },
            {
                total_registers: 9,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 6082,
                    name: "Đào Đỗ Hoài Nam",
                    color: "12134F"
                }
            },
            {
                total_registers: 12,
                campaign: {
                    id: 15,
                    name: "Offline",
                    color: "00897b"
                },
                saler: {
                    id: 7490,
                    name: "Nguyễn Như Nguyễn",
                    color: ""
                }
            },
            {
                total_registers: 5,
                campaign: {
                    id: 16,
                    name: "Instagram",
                    color: "43a047"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 16,
                    name: "Instagram",
                    color: "43a047"
                },
                saler: {
                    id: 2957,
                    name: "Trần Thu Trang",
                    color: "9a30b2"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 16,
                    name: "Instagram",
                    color: "43a047"
                },
                saler: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                total_registers: 30,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 124,
                    name: "Nguyễn Anh Đức",
                    color: ""
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 275,
                    name: "Vũ Thùy Dung",
                    color: "1e88e5"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 438,
                    name: "Dú",
                    color: "00897b"
                }
            },
            {
                total_registers: 21,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 12,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 2957,
                    name: "Trần Thu Trang",
                    color: "9a30b2"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                total_registers: 10,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 4122,
                    name: "Thái Phương Linh",
                    color: "795548"
                }
            },
            {
                total_registers: 11,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 4253,
                    name: "Trần Thanh",
                    color: "e91e63"
                }
            },
            {
                total_registers: 7,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 4323,
                    name: "Trần Phương Quỳnh",
                    color: "d16100"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                total_registers: 8,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                }
            },
            {
                total_registers: 6,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                total_registers: 24,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 6082,
                    name: "Đào Đỗ Hoài Nam",
                    color: "12134F"
                }
            },
            {
                total_registers: 3,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 17,
                    name: "Khác",
                    color: "795548"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 787,
                    name: "Nguyễn Anh Kiệt",
                    color: "7cb342"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 4253,
                    name: "Trần Thanh",
                    color: "e91e63"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 6082,
                    name: "Đào Đỗ Hoài Nam",
                    color: "12134F"
                }
            },
            {
                total_registers: 1,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                total_registers: 4,
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                },
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                total_registers: 49,
                campaign: {
                    id: 19,
                    name: "B2B",
                    color: "8bc34a"
                },
                saler: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                }
            },
            {
                total_registers: 13,
                campaign: {
                    id: 19,
                    name: "B2B",
                    color: "8bc34a"
                },
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                total_registers: 2,
                campaign: {
                    id: 19,
                    name: "B2B",
                    color: "8bc34a"
                },
                saler: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            }
        ]
    }
}

export function getDataPaidList() {
    return {
        type: types.GET_DATA_PAID_LIST,
        paidList: [
            {
                id: 17903,
                student: {
                    id: 6139,
                    name: "Trần Thanh Minh Anh",
                    email: "bibiminhanh02@hotmail.com",
                    phone: "0867763902"
                },
                money: 0,
                code: "CM31719",
                note: "dsc CCM280323",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 21:34",
                course_money: 1000000,
                class: {
                    id: 1054,
                    name: "AI 31.14",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 7699,
                    name: "Lê thị Như Quỳnh",
                    color: "9c27b0"
                }
            },
            {
                id: 18687,
                student: {
                    id: 8475,
                    name: "Hồ Nhật Quang ",
                    email: "honhatquang272@hotmail.com",
                    phone: "0868520601"
                },
                money: 1200000,
                code: "CM31718",
                note: "",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 19:04",
                course_money: 1200000,
                class: {
                    id: 1035,
                    name: "AE 31.2",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png"
                },
                collector: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                id: 18912,
                student: {
                    id: 4899,
                    name: "Hà Hồng Nhung",
                    email: "hahongnhung.570@hotmail.com",
                    phone: "0888461295"
                },
                money: 900000,
                code: "CM31717",
                note: "hưong giảm 900",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 18:57",
                course_money: 1000000,
                class: {
                    id: 1016,
                    name: "ID 31.1",
                    icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                },
                collector: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                id: 18926,
                student: {
                    id: 6681,
                    name: "Vũ Thanh Quỳnh",
                    email: "tet4455@hotmail.com",
                    phone: "01882088976"
                },
                money: 0,
                code: "CM31716",
                note: "ds chờ CM28600",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 18:55",
                course_money: 1000000,
                class: {
                    id: 1088,
                    name: "AI 32.2",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                id: 18914,
                student: {
                    id: 2039,
                    name: "Nguyễn Thị Diệu Hương",
                    email: "boo.huong@hotmail.com",
                    phone: "01665738446"
                },
                money: 0,
                code: "CM31715",
                note: "",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 18:48",
                course_money: 1000000,
                class: {
                    id: 1024,
                    name: "AI 31.3",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                }
            },
            {
                id: 18915,
                student: {
                    id: 7596,
                    name: "Lưu Khánh Chi",
                    email: "mir.nosora@hotmail.com",
                    phone: "123"
                },
                money: 0,
                code: "CM31714",
                note: "ds chờ",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 18:11",
                course_money: 1000000,
                class: {
                    id: 1024,
                    name: "AI 31.3",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                }
            },
            {
                id: 18931,
                student: {
                    id: 5364,
                    name: "Vũ Khánh Phượng",
                    email: "khanhphuongvu311@hotmail.com",
                    phone: "0847045011"
                },
                money: 0,
                code: "CM31713",
                note: "GV học",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 17:40",
                course_money: 1000000,
                class: {
                    id: 1052,
                    name: "ID 31.2",
                    icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18930,
                student: {
                    id: 4092,
                    name: "Nguyễn Huỳnh Vĩ Hòa",
                    email: "Nguyenhuynhvihoa@hotmail.com",
                    phone: "0806878704"
                },
                money: 0,
                code: "CM31712",
                note: "GV học",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 17:38",
                course_money: 1000000,
                class: {
                    id: 1052,
                    name: "ID 31.2",
                    icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18925,
                student: {
                    id: 8238,
                    name: "Lê Thị Thảo Phương",
                    email: "Lethaophuong0605@hotmail.com",
                    phone: "0831427404"
                },
                money: 0,
                code: "CCM3625",
                note: "DS chờ CM31531",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 15:22",
                course_money: 1000000,
                class: {
                    id: 1075,
                    name: "PS 32.14 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18848,
                student: {
                    id: 8575,
                    name: "Trương Đình Luân ",
                    email: "Dinhluan.sn1316@hotmail.com",
                    phone: "0884184141"
                },
                money: 700000,
                code: "CCM3624",
                note: "giữ ưu đãi flashsale 30%",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 15:21",
                course_money: 1000000,
                class: {
                    id: 990,
                    name: "PS - Danh Sách Chờ (Cơ sở 4)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 18847,
                student: {
                    id: 8575,
                    name: "Trương Đình Luân ",
                    email: "Dinhluan.sn1316@hotmail.com",
                    phone: "0884184141"
                },
                money: 700000,
                code: "CM31711",
                note: "giữ ưu đãi flashsale 30%",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 15:21",
                course_money: 1000000,
                class: {
                    id: 1024,
                    name: "AI 31.3",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 18924,
                student: {
                    id: 4954,
                    name: "Lê Hà Huỳnh Như",
                    email: "lenhu07100710@hotmail.com",
                    phone: "01252092294"
                },
                money: 0,
                code: "CM31710",
                note: "chuyển học id lại",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 15:19",
                course_money: 1000000,
                class: {
                    id: 1052,
                    name: "ID 31.2",
                    icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18905,
                student: {
                    id: 8682,
                    name: "Trần Hoa Lẫm",
                    email: "tranhoalam09@hotmail.com",
                    phone: "0845839852"
                },
                money: 1020000,
                code: "CCM3623",
                note: "combo 3",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 14:40",
                course_money: 1200000,
                class: {
                    id: 1086,
                    name: "AE 32.3 (Sài Gòn)",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18904,
                student: {
                    id: 8682,
                    name: "Trần Hoa Lẫm",
                    email: "tranhoalam09@hotmail.com",
                    phone: "0845839852"
                },
                money: 850000,
                code: "CCM3622",
                note: "combo 3",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 14:40",
                course_money: 1000000,
                class: {
                    id: 1080,
                    name: "AI 32.12 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18903,
                student: {
                    id: 8682,
                    name: "Trần Hoa Lẫm",
                    email: "tranhoalam09@hotmail.com",
                    phone: "0845839852"
                },
                money: 850000,
                code: "CCM3621",
                note: "combo 3",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 14:40",
                course_money: 1000000,
                class: {
                    id: 1077,
                    name: "PS 32.12 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18922,
                student: {
                    id: 3841,
                    name: "Vũ Thanh Trâm Anh",
                    email: "anhpnt@thschool.edu.vn",
                    phone: "0842925885"
                },
                money: 0,
                code: "CM31709",
                note: "học bổng minigame AI 21.3, xác nhận qua inbox fanpage",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 13:59",
                course_money: 1000000,
                class: {
                    id: 1042,
                    name: "PR 31.1",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 18920,
                student: {
                    id: 7327,
                    name: "Nguyễn Trang Thư",
                    email: "trangthu3010.tt@hotmail.com",
                    phone: "0808.252.147"
                },
                money: 0,
                code: "CCM3620",
                note: "DSC CCM28897",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 11:51",
                course_money: 1000000,
                class: {
                    id: 1080,
                    name: "AI 32.12 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                }
            },
            {
                id: 18913,
                student: {
                    id: 7402,
                    name: "Vũ Thị Mai Phương",
                    email: "maiphuongpham2411@hotmail.com",
                    phone: "0888396838"
                },
                money: 0,
                code: "CM31708",
                note: "bảo lưu học lại CM30286",
                paid_status: true,
                paid_time: "2016-12-13",
                paid_time_full: "13 Tháng M. hai, 2016, 10:16",
                course_money: 1000000,
                class: {
                    id: 1042,
                    name: "PR 31.1",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 18877,
                student: {
                    id: 8668,
                    name: "Lại Đình Quang ",
                    email: "quangdinh0411@hotmail.com",
                    phone: "01695160943"
                },
                money: 900000,
                code: "CM31707",
                note: "bạn chị KH",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 18:46",
                course_money: 1200000,
                class: {
                    id: 1049,
                    name: "PT 31.2",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                collector: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                id: 17795,
                student: {
                    id: 328,
                    name: "Vũ Thị Thanh Mai",
                    email: "ngocmailyon3@hotmail.com",
                    phone: "0864.236.182"
                },
                money: 0,
                code: "CM31706",
                note: "học lại ",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 18:44",
                course_money: 1000000,
                class: {
                    id: 1025,
                    name: "AI 31.2",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                id: 18900,
                student: {
                    id: 7987,
                    name: "Nguyễn Thị Phi Hậu",
                    email: "vuphihau26@hotmail.com",
                    phone: "0163.562.5669"
                },
                money: 0,
                code: "CCM3619",
                note: "ds chờ",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 18:27",
                course_money: 1000000,
                class: {
                    id: 1081,
                    name: "AI 32.11 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18759,
                student: {
                    id: 8501,
                    name: "Vũ Trung Kiên",
                    email: "kienpham01189@hotmail.com",
                    phone: "0804355903"
                },
                money: 1200000,
                code: "CM31705",
                note: "",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 18:23",
                course_money: 1200000,
                class: {
                    id: 1036,
                    name: "AE 31.1",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png"
                },
                collector: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                }
            },
            {
                id: 18448,
                student: {
                    id: 2216,
                    name: "Dư Thị Vân Anh",
                    email: "gm.lovee@hotmail.com",
                    phone: "0819822636"
                },
                money: 800000,
                code: "CM31704",
                note: "Ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 17:32",
                course_money: 1000000,
                class: {
                    id: 1014,
                    name: "AI 31.8",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18768,
                student: {
                    id: 8506,
                    name: "Hoàng Thùy Ninh",
                    email: "thuyninh054@hotmail.com",
                    phone: "0804620612"
                },
                money: 850000,
                code: "CM31703",
                note: "Ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 17:20",
                course_money: 1000000,
                class: {
                    id: 1007,
                    name: "PS 31.4",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18856,
                student: {
                    id: 6924,
                    name: "An Chau",
                    email: "chauphucan1711@hotmail.com",
                    phone: "0806630121"
                },
                money: 850000,
                code: "CM31702",
                note: "15%",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 17:12",
                course_money: 1000000,
                class: {
                    id: 1054,
                    name: "AI 31.14",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 17462,
                student: {
                    id: 6349,
                    name: "Nguyễn Thị Thanh Vy",
                    email: "vyvu.2191@hotmail.com",
                    phone: "0834859032"
                },
                money: 1000000,
                code: "CCM3618",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 16:11",
                course_money: 1000000,
                class: {
                    id: 1061,
                    name: "ID - Khoá Sau (Danh Sách Chờ cơ sở 3)",
                    icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18878,
                student: {
                    id: 8669,
                    name: "Nguyễn Trung Dũng",
                    email: "gerrard@tclfreight.com.vn",
                    phone: "0834444044"
                },
                money: 1000000,
                code: "CM31700",
                note: "",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 15:16",
                course_money: 1000000,
                class: {
                    id: 1004,
                    name: "PS 31.1",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                id: 18895,
                student: {
                    id: 7576,
                    name: "Nguyễn Thị Dung ",
                    email: "ndung31899@hotmail.com",
                    phone: "0894214645"
                },
                money: 0,
                code: "CM31701",
                note: "dsc CCM28906	",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 15:07",
                course_money: 1000000,
                class: {
                    id: 1025,
                    name: "AI 31.2",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 17717,
                student: {
                    id: 8069,
                    name: "Nguyễn Danh Khiêm",
                    email: "khiemvu.hvnh@hotmail.com",
                    phone: "01644649907"
                },
                money: 800000,
                code: "CM31699",
                note: "",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 14:43",
                course_money: 1000000,
                class: {
                    id: 1004,
                    name: "PS 31.1",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                }
            },
            {
                id: 18893,
                student: {
                    id: 8678,
                    name: "Nguyễn Thị Phương Na",
                    email: "no3bie@hotmail.com",
                    phone: "0805327723"
                },
                money: 0,
                code: "CM31698",
                note: "em anh Hùng",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 14:40",
                course_money: 1200000,
                class: {
                    id: 1049,
                    name: "PT 31.2",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                collector: {
                    id: 313,
                    name: "Huyền Trang",
                    color: "4caf50"
                }
            },
            {
                id: 18862,
                student: {
                    id: 7767,
                    name: "Châu Thị Phương Trinh",
                    email: "chinykiu@hotmail.com",
                    phone: "0128.719.9872"
                },
                money: 0,
                code: "CM31697",
                note: "DS chờ CM30517",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 12:34",
                course_money: 1000000,
                class: {
                    id: 1059,
                    name: "PS 31.17 (Sài Gòn)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "9c27b0"
                }
            },
            {
                id: 18871,
                student: {
                    id: 8665,
                    name: "Nguyễn Minh Châu",
                    email: "minhchauvu291@hotmail.com",
                    phone: "0815585552"
                },
                money: 700000,
                code: "CM31696",
                note: "giữ ưu đãi 30% flashsales ",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 11:52",
                course_money: 1000000,
                class: {
                    id: 999,
                    name: "PS 31.9",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                }
            },
            {
                id: 18682,
                student: {
                    id: 8469,
                    name: "Vũ Thị Thanh An",
                    email: "thanhanvcu@hotmail.com",
                    phone: "0874936493"
                },
                money: 850000,
                code: "CM31695",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:38",
                course_money: 1000000,
                class: {
                    id: 1014,
                    name: "AI 31.8",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18681,
                student: {
                    id: 8468,
                    name: "Đinh Thị Thúy Nga ",
                    email: "ngadt@getflycrm.com",
                    phone: "01689730012"
                },
                money: 850000,
                code: "CM31694",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:38",
                course_money: 1000000,
                class: {
                    id: 1014,
                    name: "AI 31.8",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18667,
                student: {
                    id: 8460,
                    name: "Nguyễn Thị Huyền ",
                    email: "Huyenvut.jm@hotmail.com",
                    phone: "0878258795"
                },
                money: 800000,
                code: "CM31693",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1000000,
                class: {
                    id: 1006,
                    name: "PS 31.3",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18874,
                student: {
                    id: 8484,
                    name: "Nghiêm Quang Huy",
                    email: "huynghiem99@hotmail.com",
                    phone: "0869609970"
                },
                money: 700000,
                code: "CM31692",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1000000,
                class: {
                    id: 1013,
                    name: "AI 31.6",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18853,
                student: {
                    id: 8653,
                    name: "Đỗ Thanh Anh",
                    email: "dongocanh79@hotmail.com",
                    phone: "01669556688"
                },
                money: 850000,
                code: "CM31691",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1000000,
                class: {
                    id: 1008,
                    name: "PS 31.5",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18852,
                student: {
                    id: 8653,
                    name: "Đỗ Thanh Anh",
                    email: "dongocanh79@hotmail.com",
                    phone: "01669556688"
                },
                money: 850000,
                code: "CM31690",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1000000,
                class: {
                    id: 1042,
                    name: "PR 31.1",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18718,
                student: {
                    id: 1773,
                    name: "Trần Thu Thuỷ",
                    email: "thuyttt2910@hotmail.com",
                    phone: "01693205585"
                },
                money: 700000,
                code: "CCM3617",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1000000,
                class: {
                    id: 1019,
                    name: "AI - Danh Sách Chờ (Cơ sở 1)",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            },
            {
                id: 18717,
                student: {
                    id: 1773,
                    name: "Trần Thu Thuỷ",
                    email: "thuyttt2910@hotmail.com",
                    phone: "01693205585"
                },
                money: 950000,
                code: "CCM3616",
                note: "ck",
                paid_status: true,
                paid_time: "2016-12-12",
                paid_time_full: "12 Tháng M. hai, 2016, 10:27",
                course_money: 1200000,
                class: {
                    id: 1033,
                    name: "AE - Danh Sách Chờ (Cơ sở 1)",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png"
                },
                collector: {
                    id: 2,
                    name: "Nguyễn Việt Hùng",
                    color: "009688"
                }
            }
        ],
    }
}

export function getDataMarketingCampaign() {
    return {
        type: types.GET_DATA_MARKETING_CAMPAIGN,
        marketing_campaigns: [
            {
                id: 22,
                name: "Hotline",
                color: "9c27b0"
            },
            {
                id: 21,
                name: "Đối tác Antoree test",
                color: "607d8b"
            },
            {
                id: 20,
                name: "Google Adwords",
                color: "f44336"
            },
            {
                id: 19,
                name: "B2B",
                color: "8bc34a"
            },
            {
                id: 18,
                name: "DS Chờ",
                color: "43a047"
            },
            {
                id: 17,
                name: "Khác",
                color: "795548"
            },
            {
                id: 16,
                name: "Instagram",
                color: "43a047"
            },
            {
                id: 15,
                name: "Offline",
                color: "00897b"
            },
            {
                id: 14,
                name: "Email ",
                color: "00acc1"
            },
            {
                id: 13,
                name: "Youtube",
                color: "0288d1"
            },
            {
                id: 12,
                name: "Văn phòng",
                color: "fb8c00"
            },
            {
                id: 11,
                name: "Telesale",
                color: "ffa000"
            },
            {
                id: 10,
                name: "Inbox",
                color: "fbc02d"
            },
            {
                id: 9,
                name: "FB Ads",
                color: "f4511e"
            },
            {
                id: 8,
                name: "Fanpage",
                color: "7cb342"
            },
            {
                id: 7,
                name: "Event",
                color: "43a047"
            }
        ],
    }
}

export function getDataTeleCall() {
    return {
        type: types.GET_DATA_TELE_CALL,
        tele_calls: [
            {
                id: 17786,
                student: {
                    id: 7629,
                    name: "Cao Thu Trang",
                    email: "thutrangcao0403@hotmail.com",
                    phone: "01669697868"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                note: "",
                call_time: "12 Tháng M. hai, 2016, 11:03"
            },
            {
                id: 17785,
                student: {
                    id: 8668,
                    name: "Lại Đình Quang ",
                    email: "quangdinh0411@hotmail.com",
                    phone: "01695160943"
                },
                call_status: "success",
                caller: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                },
                note: "",
                call_time: "12 Tháng M. hai, 2016, 10:32"
            },
            {
                id: 17784,
                student: {
                    id: 4102,
                    name: "Mã Phúc Quỳnh",
                    email: "phucquynh61@hotmail.com",
                    phone: "01632147020"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                note: "thuê bao",
                call_time: "12 Tháng M. hai, 2016, 10:32"
            },
            {
                id: 17783,
                student: {
                    id: 8350,
                    name: "Bùi Mai Anh",
                    email: "peishimeiying@hotmail.com",
                    phone: "0864168846"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "Chiều nay 6h đến, vẫn giảm 15% nhóm 3 người",
                call_time: "12 Tháng M. hai, 2016, 10:23"
            },
            {
                id: 17782,
                student: {
                    id: 8350,
                    name: "Bùi Mai Anh",
                    email: "peishimeiying@hotmail.com",
                    phone: "0864168846"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "",
                call_time: "12 Tháng M. hai, 2016, 10:22"
            },
            {
                id: 17781,
                student: {
                    id: 5483,
                    name: "Đồng Đức Hiệp",
                    email: "duchiep1091@hotmail.com",
                    phone: "0819078996"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "Huỷ đky vì đợt này bận",
                call_time: "12 Tháng M. hai, 2016, 10:20"
            },
            {
                id: 17780,
                student: {
                    id: 780,
                    name: "Vũ Quốc Chính",
                    email: "thanrua.chichi@hotmail.com",
                    phone: "0817.646.389"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Ậm ừ gọi toàn bảo gọi lại sau mess k rep",
                call_time: "12 Tháng M. hai, 2016, 10:18"
            },
            {
                id: 17779,
                student: {
                    id: 8492,
                    name: "Nguyễn Thu Huyền ",
                    email: "huyennt0198@hotmail.com",
                    phone: "01258283479"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "",
                call_time: "12 Tháng M. hai, 2016, 10:18"
            },
            {
                id: 17778,
                student: {
                    id: 8575,
                    name: "Trương Đình Luân ",
                    email: "Dinhluan.sn1316@hotmail.com",
                    phone: "0884184141"
                },
                call_status: "failed",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "K nghe máy mess",
                call_time: "12 Tháng M. hai, 2016, 10:16"
            },
            {
                id: 17777,
                student: {
                    id: 2148,
                    name: "Nguyễn Thị Khánh Huyền",
                    email: "huyen.hsph.157@hotmail.com",
                    phone: "0862925283"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Đã mess",
                call_time: "12 Tháng M. hai, 2016, 10:14"
            },
            {
                id: 17776,
                student: {
                    id: 8673,
                    name: "TRẦN THỊ BÍCH DIỆP",
                    email: "bongvit98@hotmail.com",
                    phone: "01682474907"
                },
                call_status: "success",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "17/12, đang đăng kí Beyo",
                call_time: "12 Tháng M. hai, 2016, 10:03"
            },
            {
                id: 17775,
                student: {
                    id: 8670,
                    name: "NGUYỄN THỊ KỲ ANH",
                    email: "kyanh22598@hotmail.com",
                    phone: "01627781100"
                },
                call_status: "success",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "ưu đãi 17/12, quan tâm",
                call_time: "12 Tháng M. hai, 2016, 10:02"
            },
            {
                id: 17774,
                student: {
                    id: 8501,
                    name: "Vũ Trung Kiên",
                    email: "kienpham01189@hotmail.com",
                    phone: "0804355903"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Tối đi học đóng",
                call_time: "12 Tháng M. hai, 2016, 09:56"
            },
            {
                id: 17773,
                student: {
                    id: 8666,
                    name: "Hồng Thanh Nguyễn",
                    email: "hongngock55neu@hotmail.com",
                    phone: "0865074605"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "12 Tháng M. hai, 2016, 09:53"
            },
            {
                id: 17772,
                student: {
                    id: 8668,
                    name: "Lại Đình Quang ",
                    email: "quangdinh0411@hotmail.com",
                    phone: "01695160943"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Tối đi học đóng 900",
                call_time: "12 Tháng M. hai, 2016, 09:51"
            },
            {
                id: 17771,
                student: {
                    id: 8671,
                    name: "Nguyễn Bá Thằng",
                    email: "bathang294@hotmail.com",
                    phone: "0866514398"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Có lịch t1 báo",
                call_time: "12 Tháng M. hai, 2016, 09:49"
            },
            {
                id: 17770,
                student: {
                    id: 8196,
                    name: "Vũ Kiều Loan",
                    email: "loanhp681998@hotmail.com",
                    phone: "01282273923"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Thuê bao",
                call_time: "12 Tháng M. hai, 2016, 09:49"
            },
            {
                id: 17769,
                student: {
                    id: 8069,
                    name: "Nguyễn Danh Khiêm",
                    email: "khiemvu.hvnh@hotmail.com",
                    phone: "01644649907"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "K nghe mess",
                call_time: "12 Tháng M. hai, 2016, 09:35"
            },
            {
                id: 17768,
                student: {
                    id: 8669,
                    name: "Nguyễn Trung Dũng",
                    email: "gerrard@tclfreight.com.vn",
                    phone: "0834444044"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Chiều đi học đóng 1tr",
                call_time: "12 Tháng M. hai, 2016, 09:22"
            },
            {
                id: 17767,
                student: {
                    id: 8668,
                    name: "Lại Đình Quang ",
                    email: "quangdinh0411@hotmail.com",
                    phone: "01695160943"
                },
                call_status: "failed",
                caller: {
                    id: 313,
                    name: "Huyền Trang",
                    color: "4caf50"
                },
                note: "Bạn Khánh Huyền, ưu đãi 25%",
                call_time: "12 Tháng M. hai, 2016, 00:03"
            },
            {
                id: 17766,
                student: {
                    id: 8484,
                    name: "Nghiêm Quang Huy",
                    email: "huynghiem99@hotmail.com",
                    phone: "0869609970"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "đã ck",
                call_time: "11 Tháng M. hai, 2016, 21:47"
            },
            {
                id: 17765,
                student: {
                    id: 8665,
                    name: "Nguyễn Minh Châu",
                    email: "minhchauvu291@hotmail.com",
                    phone: "0815585552"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "giữ ưu đãi 30% 700k flashsale do đăng ký muộn quá không ck được. Đưa học phí cho giảng viên vào sáng mai",
                call_time: "11 Tháng M. hai, 2016, 20:47"
            },
            {
                id: 17764,
                student: {
                    id: 8492,
                    name: "Nguyễn Thu Huyền ",
                    email: "huyennt0198@hotmail.com",
                    phone: "01258283479"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "chỉ học một khoá PS, giữ ưu đãi 15% sáng mai đến hoàn thành học phí",
                call_time: "11 Tháng M. hai, 2016, 20:16"
            },
            {
                id: 17763,
                student: {
                    id: 2148,
                    name: "Nguyễn Thị Khánh Huyền",
                    email: "huyen.hsph.157@hotmail.com",
                    phone: "0862925283"
                },
                call_status: "failed",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "",
                call_time: "11 Tháng M. hai, 2016, 20:13"
            },
            {
                id: 17762,
                student: {
                    id: 8121,
                    name: "Nguyễn Minh Tâm",
                    email: "Tamnmgdh17491@fpt.edu.vn",
                    phone: "0862759790"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                },
                note: "1tr550. Mai qua vp",
                call_time: "11 Tháng M. hai, 2016, 19:24"
            },
            {
                id: 17761,
                student: {
                    id: 7901,
                    name: "Trần Thương Nguyên Thảo",
                    email: "khi020496@hotmail.com",
                    phone: "01226662975"
                },
                call_status: "failed",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "thuê bao nhiều lần, đã mes remind",
                call_time: "11 Tháng M. hai, 2016, 18:47"
            },
            {
                id: 17760,
                student: {
                    id: 7433,
                    name: "Trần Hương Giang",
                    email: "tranhuonggiangkn@hotmail.com",
                    phone: "0168.330.3689"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "đi học đóng tiền",
                call_time: "11 Tháng M. hai, 2016, 18:32"
            },
            {
                id: 17759,
                student: {
                    id: 7645,
                    name: "Nguyễn Hồng Anh Tuấn",
                    email: "camap1033@hotmail.com",
                    phone: "0832703410"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "không học, tự chủ động ll",
                call_time: "11 Tháng M. hai, 2016, 18:28"
            },
            {
                id: 17758,
                student: {
                    id: 6349,
                    name: "Nguyễn Thị Thanh Vy",
                    email: "vyvu.2191@hotmail.com",
                    phone: "0834859032"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "ngày mai ck, học tháng 1",
                call_time: "11 Tháng M. hai, 2016, 18:24"
            },
            {
                id: 17757,
                student: {
                    id: 8334,
                    name: "Hoàng Lê Khánh Ngân",
                    email: "khanhnganhoang94@hotmail.com",
                    phone: "0838692875"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "đợi đủ tất cả các khoá mới học, chủ động liên hệ lại",
                call_time: "11 Tháng M. hai, 2016, 18:20"
            },
            {
                id: 17756,
                student: {
                    id: 8401,
                    name: "Vũ Thanh Hường",
                    email: "phth.huong92@hotmail.com",
                    phone: "0805041292"
                },
                call_status: "failed",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "bạn sẽ tự chủ động liên hệ",
                call_time: "11 Tháng M. hai, 2016, 18:20"
            },
            {
                id: 17755,
                student: {
                    id: 7594,
                    name: "Lý Tuấn Khiêm",
                    email: "khiemly208@hotmail.com",
                    phone: "0872689714"
                },
                call_status: "failed",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "không gọi đc, đã mess",
                call_time: "11 Tháng M. hai, 2016, 18:15"
            },
            {
                id: 17754,
                student: {
                    id: 8333,
                    name: "Trần Hải Linh ",
                    email: "annayentran2106@hotmail.com",
                    phone: "01277810787"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "khi nào lên học đóng tiền",
                call_time: "11 Tháng M. hai, 2016, 18:10"
            },
            {
                id: 17753,
                student: {
                    id: 8333,
                    name: "Trần Hải Linh ",
                    email: "annayentran2106@hotmail.com",
                    phone: "01277810787"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "chuyển lịch học t1",
                call_time: "11 Tháng M. hai, 2016, 18:10"
            },
            {
                id: 17752,
                student: {
                    id: 5955,
                    name: "Nguyễn Hồ Bảo Chấn",
                    email: "baochan98@hotmail.com",
                    phone: "01225451261"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "khai giảng lên đóng học phí",
                call_time: "11 Tháng M. hai, 2016, 18:07"
            },
            {
                id: 17751,
                student: {
                    id: 8663,
                    name: "Quach Hien",
                    email: "hoanghien97@hotmail.com",
                    phone: "0886781771"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "11 Tháng M. hai, 2016, 18:04"
            },
            {
                id: 17750,
                student: {
                    id: 7628,
                    name: "Huỳnh Vũ Phương Na",
                    email: "hvpthao@hotmail.com",
                    phone: "0838250083"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "không có thời gian, t1 học",
                call_time: "11 Tháng M. hai, 2016, 17:59"
            },
            {
                id: 17749,
                student: {
                    id: 8051,
                    name: "Nguyễn Thị Linh Nhi",
                    email: "yenhi.nt@hotmail.com",
                    phone: "0883035000"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "đang ở quê, không học được, chuyển sang năm sau",
                call_time: "11 Tháng M. hai, 2016, 17:56"
            },
            {
                id: 17748,
                student: {
                    id: 8127,
                    name: "Phu Ngan Han",
                    email: "nganhan3004@hotmail.com",
                    phone: "0838152468"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "không có time, chuyển qua năm sau",
                call_time: "11 Tháng M. hai, 2016, 17:54"
            },
            {
                id: 17747,
                student: {
                    id: 6766,
                    name: "Trần Nhật Duy",
                    email: "trannhatduy.lawyer@hotmail.com",
                    phone: "0127.846.6608"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "không muốn học nữa",
                call_time: "11 Tháng M. hai, 2016, 17:52"
            }
        ],
    }
}

export function getDataPeople() {
    return {
        type: types.GET_DATA_PEOPLE,
        staff: [
            {
                id: 26,
                name: "Linh Nhi",
                email: "nhi.tty146@hotmail.com",
                created_at: "2016-02-10 17:47:17",
                updated_at: "2016-11-27 14:40:16",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1474537430dcZ400aXFMpPuC0.jpg",
                cover_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1474537492Ia3yzwhkvNhQWz1.jpg",
                description: "Sale & Marketing Manager at colorME",
                university: "ĐH Kinh Tế Quốc Dân",
                work: "colorME",
                address: "Hà Nội",
                username: "nhi.tty146",
                phone: "01689678262",
                how_know: "",
                facebook: "",
                dob: "1995-06-14",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1474537430dcZ400aXFMpPuC0.jpg",
                cover_name: "/images/1474537492Ia3yzwhkvNhQWz1.jpg",
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "e91e63",
                base_id: 3,
                marital: 1,
                homeland: "",
                literacy: 0,
                start_company: "2015-11-01 00:00:00",
                age: 23,
                deleted_at: null,
                type: null
            },
            {
                id: 38,
                name: "Trịnh Thanh Hà",
                email: "trinhthanhha1105@hotmail.com",
                created_at: "2016-02-11 03:25:45",
                updated_at: "2016-09-09 17:01:58",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146229259379k739AO8l3Ssyt.jpg",
                cover_url: "",
                description: "chậm lại thôi :v",
                university: "ĐH KTQD",
                work: "",
                address: "Cầu Giấy, Hà Nội",
                username: "trinhthanhha1105",
                phone: "01666575729",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-05-11",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/146229259379k739AO8l3Ssyt.jpg",
                cover_name: null,
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "f44336",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 39,
                name: "Hứa Hiền Linh",
                email: "linhhh.bav@hotmail.com",
                created_at: "2016-02-11 03:25:46",
                updated_at: "2016-09-28 15:50:40",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1506588638DBPnLTYPoXBHe69.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1460023498BFYRvN18G7rNqhn.jpg",
                description: "",
                university: "Arena Multimedia",
                work: "colorME",
                address: "",
                username: "linhhh.bav",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "2016-08-18",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1506588638DBPnLTYPoXBHe69.jpg",
                cover_name: "/images/1460023498BFYRvN18G7rNqhn.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "e91e63",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 40,
                name: " Đức Hoàng",
                email: "duchoangvu240597@hotmail.com",
                created_at: "2016-02-11 03:25:48",
                updated_at: "2016-09-09 17:02:10",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1475488476QVYGrKR1hmf3WRu.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466594740VZrMeFaY923KwkK.jpg",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "duchoangg",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1997-05-24",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1475488476QVYGrKR1hmf3WRu.jpg",
                cover_name: "/images/1466594740VZrMeFaY923KwkK.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "9c27b0",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 41,
                name: "Con Cá",
                email: "haveyoueverbeenlove@hotmail.com",
                created_at: "2016-02-11 03:25:49",
                updated_at: "2016-09-28 01:09:26",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457529913ZeLnSBzbRoLrCdf.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462719494tP3UBcZ3obELMH5.jpg",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "concaaa",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1995-05-13",
                gender: "1",
                money: 814011,
                status: 0,
                avatar_name: "/images/1457529913ZeLnSBzbRoLrCdf.jpg",
                cover_name: "/images/1462719494tP3UBcZ3obELMH5.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "673ab7",
                base_id: 4,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 45,
                name: "Nguyen Mine Linh",
                email: "mailinhvu.15@hotmail.com",
                created_at: "2016-02-11 03:26:00",
                updated_at: "2016-09-20 15:01:17",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457424670qC09gEUVo3hAYyb.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468571054lTj1LM8g1knnWlm.jpg",
                description: "",
                university: "Học viện Công nghệ Bưu chính Viễn thông",
                work: "colorME",
                address: "Tây Hồ Hà Nội",
                username: "mailinhvu.15",
                phone: "01654085862",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-05-01",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1457424670qC09gEUVo3hAYyb.jpg",
                cover_name: "/images/1468571054lTj1LM8g1knnWlm.jpg",
                order: 0,
                role_id: 20,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "cddc39",
                base_id: 3,
                marital: 1,
                homeland: "Hà Nội",
                literacy: 1,
                start_company: "2016-02-02 00:00:00",
                age: 21,
                deleted_at: null,
                type: null
            },
            {
                id: 46,
                name: "Thu Trang",
                email: "vuthutrang.hmu@hotmail.com",
                created_at: "2016-02-11 03:26:03",
                updated_at: "2016-09-09 17:02:27",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462903003SFggmwF4imwMqTw.jpeg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1470645730OSg0Ela6P3PXYpA.JPG",
                description: "",
                university: "",
                work: "",
                address: "",
                username: "vuthutrang.hmu",
                phone: "",
                how_know: "",
                facebook: "",
                dob: "1997-10-29",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1462903003SFggmwF4imwMqTw.jpeg",
                cover_name: "/images/1470645730OSg0Ela6P3PXYpA.JPG",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "2196f3",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 2,
                name: "Nguyễn Việt Hùng",
                email: "hung@hotmail.com",
                created_at: "2016-02-11 04:03:36",
                updated_at: "2016-12-02 20:53:43",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466096090IsWXNOeHvMIhpMT.jpg",
                description: "",
                university: "FPT University",
                work: "1684026343",
                address: "Dong Da",
                username: "hung",
                phone: "01684026343",
                how_know: "",
                facebook: ".",
                dob: "2016-09-14",
                gender: "1",
                money: 1685711000,
                status: 0,
                avatar_name: "/images/1503369355g3nTaVigDKKyjUQ.jpg",
                cover_name: "/images/1466096090IsWXNOeHvMIhpMT.jpg",
                order: 2,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 103,
                color: "009688",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 1,
                name: "Quan Ca",
                email: "aquancva@hotmail.com",
                created_at: "2016-02-13 10:35:54",
                updated_at: "2016-11-13 15:42:07",
                role: 2,
                code: "",
                avatar_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage",
                description: "",
                university: "Quan Ca",
                work: "0969785925",
                address: "22 Trần Quốc Toản",
                username: "caoquan",
                phone: "0878086530",
                how_know: "",
                facebook: "",
                dob: "2016-12-13",
                gender: "1",
                money: 13,
                status: 0,
                avatar_name: "/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_name: null,
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 130,
                color: "f44336",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 6730,
                name: "Quan High",
                email: "quan@colorme.vn",
                created_at: "2016-02-13 10:35:54",
                updated_at: "2016-11-13 15:42:07",
                role: 1,
                code: "",
                avatar_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage",
                description: "",
                university: "Quan Ca",
                work: "0969785925",
                address: "22 Trần Quốc Toản",
                username: "quanca",
                phone: "0878086530",
                how_know: "",
                facebook: "",
                dob: "2016-12-13",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1503131612qkfg0K1kNOoQ5IJ.jpg",
                cover_name: null,
                order: 0,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 130,
                color: "",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 74,
                name: "Vũ Khánh Huyền",
                email: "phamkhanhhuyen.0412@hotmail.com",
                created_at: "2016-02-16 16:02:04",
                updated_at: "2016-11-04 21:16:50",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507718500CG6HuKFWDRE9bEO.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1463560111XoORy9jcgIMytvy.jpg",
                description: "Lêu lêu :) ",
                university: "Đại học Ngoại Thương",
                work: "Công nhân tại ColorME",
                address: "Ba Đình, Hà Nội",
                username: "khanhuyn0412",
                phone: "01699184360",
                how_know: "",
                facebook: "",
                dob: "1996-12-04",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1507718500CG6HuKFWDRE9bEO.jpg",
                cover_name: "/images/1463560111XoORy9jcgIMytvy.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "00bcd4",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 124,
                name: "Nguyễn Anh Đức",
                email: "ducna.mgc@hotmail.com",
                created_at: "2016-02-17 20:29:09",
                updated_at: "2016-09-07 10:02:40",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1504753360CgEln48Iw5etz0u.jpg",
                cover_url: "",
                description: "",
                university: "Đại Học Kinh Tế Quốc Dân",
                work: "Đại Học Kinh Tế Quốc Dân",
                address: "Tô Hiệu Cầu Giấy Hà Nội",
                username: "ducna.mgc",
                phone: "0165476269",
                how_know: "Người quen",
                facebook: "https://www.facebook.com/vuanh.duc.58",
                dob: "0000-00-00",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: null,
                cover_name: null,
                order: 0,
                role_id: 8,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 221,
                name: "Lê Trâm Anh",
                email: "tramanhle9797@hotmail.com",
                created_at: "2016-02-22 10:24:03",
                updated_at: "2016-10-10 10:23:22",
                role: 1,
                code: "",
                avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146098241539FobW9ObGkNTSp.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1459746168Byul83svmmAwK9A.jpg",
                description: "",
                university: "FTU",
                work: "",
                address: "Hà Đông",
                username: "tramanhle9797",
                phone: "01634361163",
                how_know: "Facebook",
                facebook: "facebook.com/lee.3i",
                dob: "1997-09-07",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/146098241539FobW9ObGkNTSp.jpg",
                cover_name: "/images/1459746168Byul83svmmAwK9A.jpg",
                order: 0,
                role_id: 15,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 0,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 228,
                name: "Dương Nhật Anh",
                email: "anhdnse04260@fpt.edu.vn",
                created_at: "2016-02-22 20:46:43",
                updated_at: "2016-11-30 16:46:28",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1504404886wdXEVCPFipzhPqJ.jpg",
                cover_url: "",
                description: "",
                university: "FPT University",
                work: "ColorME",
                address: "",
                username: "anhdn_",
                phone: "0834559919",
                how_know: "",
                facebook: "",
                dob: "1995-11-03",
                gender: "1",
                money: 89595000,
                status: 0,
                avatar_name: "/images/1504404886wdXEVCPFipzhPqJ.jpg",
                cover_name: null,
                order: 1,
                role_id: 9,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "",
                base_id: 3,
                marital: 1,
                homeland: "Quảng Trị",
                literacy: 0,
                start_company: "2015-07-07 00:00:00",
                age: 22,
                deleted_at: null,
                type: null
            },
            {
                id: 313,
                name: "Huyền Trang",
                email: "huyentrang@colorme.vn",
                created_at: "2016-02-28 22:56:05",
                updated_at: "2016-11-05 18:15:20",
                role: 2,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15045995749eyjJ6XH9OHC43F.jpg",
                cover_url: "",
                description: "",
                university: "Đại học Ngoại Thương",
                work: "",
                address: "185 Chùa Láng Đống Đa, Hà Nội",
                username: "hohuyentrang258",
                phone: "0849587867",
                how_know: "Người quen",
                facebook: "Facebook.com/Sunnyni.7",
                dob: "1997-08-25",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: null,
                cover_name: null,
                order: 0,
                role_id: 18,
                is_request_cv: 0,
                cv_url: "",
                cv_id: 0,
                color: "4caf50",
                base_id: 3,
                marital: 1,
                homeland: "",
                literacy: 1,
                start_company: "2016-02-13 00:00:00",
                age: 20,
                deleted_at: null,
                type: null
            },
            {
                id: 336,
                name: "Nguyễn Kiều Trang",
                email: "kieutrangnt53.fbaelite@hotmail.com",
                created_at: "2016-03-02 23:05:46",
                updated_at: "2016-09-09 17:02:52",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1479719670PveTZYk9d4gj7vG.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1465070257fn0YjG9F8kTyRGa.jpg",
                description: "",
                university: "Đại học Ngoại Thương ",
                work: "colorME",
                address: "Chùa Láng ",
                username: "kieutrangnt53.fbaelite",
                phone: "01664202629",
                how_know: "Lý do khác",
                facebook: "https://www.facebook.com/rosalinalaciel",
                dob: "2016-07-06",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1479719670PveTZYk9d4gj7vG.jpg",
                cover_name: "/images/1465070257fn0YjG9F8kTyRGa.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "009688",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 507,
                name: "Le Tuan Dat",
                email: "datlt.bav@hotmail.com",
                created_at: "2016-03-21 20:06:27",
                updated_at: "2016-09-09 17:02:57",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1482480963wiOGb5SjVsRb7pT.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1462115910lCup9M2NgCnoOJL.jpg",
                description: "Giảng viên After Effect và Photography tại colorME",
                university: "Học Viện Ngân Hàng",
                work: "ColorME",
                address: "",
                username: "datlt.bav",
                phone: "0875714696",
                how_know: "Lý do khác",
                facebook: "",
                dob: "1996-02-15",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1482480963wiOGb5SjVsRb7pT.jpg",
                cover_name: "/images/1462115910lCup9M2NgCnoOJL.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "4caf50",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 587,
                name: "Nguyễn Thanh Xuyến",
                email: "thaovucass25897@hotmail.com",
                created_at: "2016-03-31 17:34:46",
                updated_at: "2016-09-09 17:03:08",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1483364168VmBoUA5pF3RzuWb.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146565518735Lehcv9q18urPq.jpeg",
                description: "",
                university: "viện đại học mở hà nội",
                work: "",
                address: "tam trinh , hà nội",
                username: "thaovucass25897",
                phone: "01662164306",
                how_know: "",
                facebook: "",
                dob: "1996-11-30",
                gender: "2",
                money: 0,
                status: 0,
                avatar_name: "/images/1483364168VmBoUA5pF3RzuWb.jpg",
                cover_name: "/images/146565518735Lehcv9q18urPq.jpeg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "cddc39",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 650,
                name: "Nguyễn Việt Anh",
                email: "vuvietanh.020395@hotmail.com",
                created_at: "2016-04-08 23:16:51",
                updated_at: "2016-09-09 17:03:13",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1486463354BFNafPVd92tGgaR.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1466257702CTOXStufY0XoGy1.png",
                description: "Intelligent but lazy",
                university: "Học viện công nghệ Bưu chính viễn thông",
                work: "colorMe",
                address: "102/75 Giải Phóng",
                username: "vuvietanh.020395",
                phone: "0802202395",
                how_know: "",
                facebook: "",
                dob: "1995-03-02",
                gender: "1",
                money: 0,
                status: 0,
                avatar_name: "/images/1486463354BFNafPVd92tGgaR.jpg",
                cover_name: "/images/1466257702CTOXStufY0XoGy1.png",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "ffeb3b",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            },
            {
                id: 708,
                name: "Hoàng Minh Tùng ",
                email: "blueberryandmatcha@hotmail.com",
                created_at: "2016-04-12 23:05:06",
                updated_at: "2016-10-31 11:31:11",
                role: 1,
                code: "",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505995284sSCsAFCwB0lAf38.jpg",
                cover_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146228402001XRjfPETtMCGMj.jpg",
                description: "",
                university: "FPT polytechnic",
                work: "",
                address: "Cầu Diễn, Hà Nội.",
                username: "blueberryandmatcha",
                phone: "0862910248",
                how_know: "Người quen",
                facebook: "https://www.facebook.com/tung.minh.96",
                dob: "0000-00-00",
                gender: "1",
                money: 0,
                status: 2,
                avatar_name: "/images/146228393206v9eV7G9bUb95B.jpg",
                cover_name: "/images/146228402001XRjfPETtMCGMj.jpg",
                order: 0,
                role_id: 10,
                is_request_cv: 1,
                cv_url: "",
                cv_id: 0,
                color: "ffc107",
                base_id: 3,
                marital: 0,
                homeland: "",
                literacy: 0,
                start_company: "0000-00-00 00:00:00",
                age: 0,
                deleted_at: null,
                type: null
            }
        ],
    }
}

export function getDataSchedules() {
    return {
        type: types.GET_DATA_SCHEDULES,
        schedules: [
            {
                id: 24,
                name: "Tối Thứ 2 - Thứ 4 - Thứ 6 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ hai: 19:00-21:00<br/>Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>",
                study_session_ids: [
                    4,
                    9,
                    15
                ]
            },
            {
                id: 22,
                name: "Tối Thứ 3 - Thứ 5 - Thứ 7 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ ba: 19:00-21:00<br/>Thứ năm: 19:00-21:00<br/>Thứ bảy: 19:00-21:00<br/>",
                study_session_ids: [
                    6,
                    12,
                    18
                ]
            },
            {
                id: 21,
                name: "Lịch khoá chuyên sâu 4-6-CN (19h00-21h00)",
                description: "",
                sessions_str: "Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>Chủ nhật: 19:00-21:00<br/>",
                study_session_ids: [
                    9,
                    15,
                    21
                ]
            },
            {
                id: 19,
                name: "Tối Thứ 7 - Chủ Nhật (19h00-21h00)",
                description: "",
                sessions_str: "Thứ bảy: 19:00-21:00<br/>Chủ nhật: 19:00-21:00<br/>",
                study_session_ids: [
                    18,
                    21
                ]
            },
            {
                id: 18,
                name: "Chiều Thứ 7 - Chủ Nhật (15h00-17h00)",
                description: "",
                sessions_str: "Thứ bảy: 15:00-17:00<br/>Chủ nhật: 15:00-17:00<br/>",
                study_session_ids: [
                    17,
                    20
                ]
            },
            {
                id: 17,
                name: "Sáng Thứ 7 - Chủ Nhật (9h00-11h00)",
                description: "",
                sessions_str: "Thứ bảy: 9:00-11:00<br/>Chủ nhật: 9:00-11:00<br/>",
                study_session_ids: [
                    16,
                    19
                ]
            },
            {
                id: 16,
                name: "Tối Thứ 4 - Thứ 6 (19h00-21h00)	",
                description: "",
                sessions_str: "Thứ tư: 19:00-21:00<br/>Thứ sáu: 19:00-21:00<br/>",
                study_session_ids: [
                    9,
                    15
                ]
            },
            {
                id: 15,
                name: "Chiều Thứ 4 - Thứ 6 (15h00-17h00)",
                description: "",
                sessions_str: "Thứ tư: 15:00-17:00<br/>Thứ sáu: 15:00-17:00<br/>",
                study_session_ids: [
                    8,
                    14
                ]
            },
            {
                id: 14,
                name: "Sáng Thứ 4 - Thứ 6 (9h00-11h00)",
                description: "",
                sessions_str: "Thứ tư: 9:00-11:00<br/>Thứ sáu: 9:00-11:00<br/>",
                study_session_ids: [
                    7,
                    13
                ]
            },
            {
                id: 13,
                name: "Tối Thứ 3 - Thứ 5 (19h00-21h00)",
                description: "",
                sessions_str: "Thứ ba: 19:00-21:00<br/>Thứ năm: 19:00-21:00<br/>",
                study_session_ids: [
                    6,
                    12
                ]
            },
            {
                id: 12,
                name: "Chiều Thứ 3 - Thứ 5 (15h00-17h00)",
                description: "",
                sessions_str: "Thứ ba: 15:00-17:00<br/>Thứ năm: 15:00-17:00<br/>",
                study_session_ids: [
                    1,
                    11
                ]
            },
            {
                id: 3,
                name: "Sáng Thứ 3 - Thứ 5 (9h00-11h00)",
                description: "",
                sessions_str: "Thứ ba: 9:00-11:00<br/>Thứ năm: 9:00-11:00<br/>",
                study_session_ids: [
                    5,
                    10
                ]
            }
        ]
    }
}

export function getDataRole() {
    return {
        type: types.GET_DATA_ROLE,
        roles: [
            {
                id: 22,
                role_title: "Designer SM",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 12,
                created_at: "2016-10-22 15:53:12",
                updated_at: "2016-10-22 15:53:12",
                deleted_at: null
            },
            {
                id: 21,
                role_title: "backend",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 9,
                created_at: "2016-10-08 10:35:05",
                updated_at: "2016-11-01 23:33:41",
                deleted_at: null
            },
            {
                id: 20,
                role_title: "Giám đốc đào tạo",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 22,
                created_at: "2016-09-20 15:01:06",
                updated_at: "2016-11-16 00:03:06",
                deleted_at: null
            },
            {
                id: 19,
                role_title: "Sales Manager",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 27,
                created_at: "2016-09-07 14:59:12",
                updated_at: "2016-10-12 13:07:37",
                deleted_at: null
            },
            {
                id: 18,
                role_title: "Trợ lý Giám đốc Sales&Marketing",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 34,
                created_at: "2016-08-08 11:22:05",
                updated_at: "2016-10-12 13:08:19",
                deleted_at: null
            },
            {
                id: 17,
                role_title: "Quản lý sách",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 7,
                created_at: "2016-10-16 10:38:59",
                updated_at: "2016-11-27 00:11:26",
                deleted_at: null
            },
            {
                id: 16,
                role_title: "test chuyen tiennn",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 1,
                created_at: "2016-08-28 22:09:43",
                updated_at: "2016-08-28 22:09:43",
                deleted_at: null
            },
            {
                id: 15,
                role_title: "Trainee",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 4,
                created_at: "2016-07-11 20:41:32",
                updated_at: "2016-09-05 13:01:59",
                deleted_at: null
            },
            {
                id: 13,
                role_title: "Email Marketing",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 26,
                created_at: "2016-07-08 14:31:05",
                updated_at: "2016-09-05 13:03:42",
                deleted_at: null
            },
            {
                id: 11,
                role_title: "IT",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 48,
                created_at: "2016-07-05 16:36:35",
                updated_at: "2016-10-12 13:10:48",
                deleted_at: null
            },
            {
                id: 10,
                role_title: "Giảng viên",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 12,
                created_at: "2016-07-05 16:35:28",
                updated_at: "2016-09-05 13:01:20",
                deleted_at: null
            },
            {
                id: 9,
                role_title: "CEO",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 61,
                created_at: "2016-07-05 16:34:41",
                updated_at: "2016-10-12 13:09:48",
                deleted_at: null
            },
            {
                id: 8,
                role_title: "Marketing&Sales",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 33,
                created_at: "2016-07-05 16:33:00",
                updated_at: "2016-10-12 13:09:05",
                deleted_at: null
            },
            {
                id: 7,
                role_title: "Telesale",
                role_slug: "",
                num_staffs: 0,
                num_tabs: 21,
                created_at: "2016-07-05 09:40:29",
                updated_at: "2016-04-15 21:50:21",
                deleted_at: null
            }
        ]
    }
}

export function getDataStudySession() {
    return {
        type: types.GET_DATA_STUDY_SESSION,
        study_sessions: [
            {
                id: 21,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 20,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 19,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Chủ nhật",
                selected: false
            },
            {
                id: 18,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 17,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 16,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ bảy",
                selected: false
            },
            {
                id: 15,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 14,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 13,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ sáu",
                selected: false
            },
            {
                id: 12,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 11,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 10,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ năm",
                selected: false
            },
            {
                id: 9,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 8,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 7,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ tư",
                selected: false
            },
            {
                id: 6,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ ba",
                selected: false
            },
            {
                id: 5,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ ba",
                selected: false
            },
            {
                id: 4,
                start_time: "19:00",
                end_time: "21:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 3,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 2,
                start_time: "9:00",
                end_time: "11:00",
                weekday: "Thứ hai",
                selected: false
            },
            {
                id: 1,
                start_time: "15:00",
                end_time: "17:00",
                weekday: "Thứ ba",
                selected: false
            }
        ]
    }
}

export function getDataRegisterStudent() {
    return {
        type: types.GET_DATA_REGISTER_STUDENT,
        registers: [
            {
                id: 18594,
                gen_id: 25,
                code: "CM31545",
                name: "Nguyễn Việt Hoàng",
                student_id: 7359,
                email: "vietnga.skt@hotmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0879682929",
                paid_status: true,
                time_to_reach: 24,
                course_avatar_url: "http://www.channel4.com/media/images/Channel4/c4-news/2013/Dec/24/24_snowden3_g_w.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 3,
                note: "CM30072 học lại để nắm vững kiến thức ",
                class: {
                    name: "PR 31.1",
                    id: 1042,
                    study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                    description: "Khai giảng ngày 16 tháng 12 năm 2016",
                    room: "Tầng 4",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-04 10:32:30",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                campaign: {
                    id: 18,
                    name: "DS Chờ",
                    color: "43a047"
                }
            },
            {
                id: 18592,
                gen_id: 25,
                code: "",
                name: "Tăng Mỹ Kỳ",
                student_id: 8396,
                email: "myky.tang@hotmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0833901144",
                paid_status: false,
                time_to_reach: 1,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS 31.17 (Sài Gòn)",
                    id: 1059,
                    study_time: "(19h-21h) Thứ 4 - Thứ 6",
                    description: "Khai giảng ngày 13 tháng 12 năm 2016",
                    room: "Tầng 5",
                    base: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM"
                },
                created_at: "2016-12-04 10:15:17",
                is_delete: true,
                call_status: "success",
                saler: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18591,
                gen_id: 25,
                code: "",
                name: "Nguyễn Thị Hồng Hà",
                student_id: 5972,
                email: "1234glx@hotmail.com",
                university: "Học viện Ngoại giao",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1502413914zm9KIcYAuInDNM2.jpg",
                phone: "0868959480",
                paid_status: false,
                time_to_reach: 23,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                course_money: 1000000,
                money: 0,
                study_time: 3,
                note: "",
                class: {
                    name: "AI 31.4",
                    id: 1023,
                    study_time: "(19h-21h) Thứ 4 - Thứ 6",
                    description: "Khai giảng ngày 13 tháng 12 năm 2016",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-04 09:29:58",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18590,
                gen_id: 25,
                code: "",
                name: "Lê Đặng Hoàng Tùng",
                student_id: 8394,
                email: "ledanghoangtung@hotmail.com",
                university: "RMIT",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01638595779",
                paid_status: false,
                time_to_reach: 22,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PS 31.6",
                    id: 1009,
                    study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                    description: "Khai giảng ngày 16 tháng 12 năm 2016",
                    room: "Tầng 5",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-04 08:47:27",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18586,
                gen_id: 25,
                code: "",
                name: "Nguyễn Thanh Diệp Linh",
                student_id: 8393,
                email: "diepyenng@hotmail.com",
                university: "Viện ĐH Mở Hà Nội",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0889363951",
                paid_status: false,
                time_to_reach: 14,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI 31.1",
                    id: 1026,
                    study_time: "(9h-11h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2016",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-04 00:46:59",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 5064,
                    name: "Nguyễn Thanh Thi",
                    color: ""
                },
                campaign: {
                    id: 8,
                    name: "Fanpage",
                    color: "7cb342"
                }
            },
            {
                id: 18585,
                gen_id: 25,
                code: "",
                name: "Vũ Lê Thanh Linh",
                student_id: 7557,
                email: "ngoclinhrobust26@hotmail.com",
                university: "Đại học Hà Nội",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01632361999",
                paid_status: false,
                time_to_reach: 14,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                course_money: 1000000,
                money: 0,
                study_time: 2,
                note: "",
                class: {
                    name: "PS - Danh Sách Chờ (Cơ sở 2)",
                    id: 993,
                    study_time: "ColorME sẽ gọi cho bạn ngay khi có khoá mới. ",
                    description: "ColorME sẽ gọi cho bạn ngay khi có khoá mới.",
                    room: "Tầng 5",
                    base: "Số 162 phố Phương Liệt ( số 83 Trường Chinh rẽ vào) - Thanh Xuân - Hà Nội"
                },
                created_at: "2016-12-04 00:08:21",
                is_delete: true,
                call_status: "uncall"
            },
            {
                id: 18583,
                gen_id: 25,
                code: "",
                name: "Đinh Phương Linh",
                student_id: 8392,
                email: "linhdinh812@hotmail.com",
                university: "z",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0883633970",
                paid_status: false,
                time_to_reach: 13,
                course_avatar_url: "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc2NjE3NzUzNV5BMl5BanBnXkFtZTcwMDg0Njg3Mw@@._V1_UY1200_CR87,0,630,1200_AL_.jpg",
                course_money: 1200000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AE 31.1",
                    id: 1036,
                    study_time: "(19h-21h) Thứ 3 - Thứ 5",
                    description: "Khai giảng ngày 12 tháng 12 năm 2016",
                    room: "Tầng 4",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-03 23:41:06",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18580,
                gen_id: 25,
                code: "",
                name: "Vũ Thị Thảo Nguyên",
                student_id: 8391,
                email: "vttnvu295@hotmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "01697670653",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "AI - Danh Sách Chờ (Cơ sở 1)",
                    id: 1019,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-03 22:32:06",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            },
            {
                id: 18575,
                gen_id: 25,
                code: "",
                name: "Hoàng Mai Linh",
                student_id: 8390,
                email: "linhbin18799@hotmail.com",
                university: ".",
                avatar_url: "http://api.colorme.vn/img/user.png",
                phone: "0864980070",
                paid_status: false,
                time_to_reach: 12,
                course_avatar_url: "http://cdn.collider.com/wp-content/uploads/person-of-interest-taraji-p-henson-4.jpg",
                course_money: 1000000,
                money: 0,
                study_time: 1,
                note: "",
                class: {
                    name: "PR - Danh Sách Chờ (Cơ sở 1)",
                    id: 1041,
                    study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                    description: "Nhận ưu đãi tốt nhất từ colorME",
                    room: "Tầng 2",
                    base: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
                },
                created_at: "2016-12-03 22:10:24",
                is_delete: true,
                call_status: "uncall",
                saler: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                campaign: {
                    id: 10,
                    name: "Inbox",
                    color: "fbc02d"
                }
            }
        ],
    }
}

export function getDataGens() {
    return {
        type: types.GET_DATA_GENS,
        gens: [
            {
                id: 26,
                name: "32",
                description: "Khai giảng ngày 16 tháng 1 năm 2018",
                start_time: "2016-12-01",
                end_time: "2018-02-18",
                status: 0,
                teach_status: 0
            },
            {
                id: 25,
                name: "31",
                description: "Khai giảng ngày 12 tháng 12 năm 2016",
                start_time: "2016-11-09",
                end_time: "2016-12-12",
                status: 1,
                teach_status: 0
            },
            {
                id: 23,
                name: "30",
                description: "Khóa 30",
                start_time: "2016-10-11",
                end_time: "2016-11-08",
                status: 0,
                teach_status: 1
            },
            {
                id: 22,
                name: "29",
                description: "",
                start_time: "2016-09-07",
                end_time: "2016-10-11",
                status: 0,
                teach_status: 0
            },
            {
                id: 21,
                name: "28",
                description: "",
                start_time: "2016-08-09",
                end_time: "2016-09-06",
                status: 0,
                teach_status: 0
            },
            {
                id: 20,
                name: "27",
                description: "",
                start_time: "2016-07-07",
                end_time: "2016-08-08",
                status: 0,
                teach_status: 0
            },
            {
                id: 19,
                name: "26",
                description: "",
                start_time: "2016-06-09",
                end_time: "2016-07-06",
                status: 0,
                teach_status: 0
            },

            {
                id: 18,
                name: "25",
                description: "",
                start_time: "2016-05-13",
                end_time: "2016-06-10",
                status: 0,
                teach_status: 0
            },
            {
                id: 17,
                name: "24",
                description: "",
                start_time: "2016-04-13",
                end_time: "2016-05-13",
                status: 0,
                teach_status: 0
            },
            {
                id: 16,
                name: "23",
                description: "",
                start_time: "2016-03-14",
                end_time: "2016-04-12",
                status: 0,
                teach_status: 0
            },
            {
                id: 15,
                name: "21",
                description: "",
                start_time: "2016-02-13",
                end_time: "2016-03-14",
                status: 0,
                teach_status: 0
            },
            {
                id: 14,
                name: "20",
                description: "",
                start_time: "2016-01-04",
                end_time: "2016-02-17",
                status: 0,
                teach_status: 0
            },
            {
                id: 13,
                name: "19",
                description: "",
                start_time: "2016-12-03",
                end_time: "2016-01-03",
                status: 0,
                teach_status: 0
            },
            {
                id: 12,
                name: "18",
                description: "",
                start_time: "2016-11-06",
                end_time: "2016-12-03",
                status: 0,
                teach_status: 0
            },

            {
                id: 10,
                name: "17",
                description: "ƯU ĐÃI NỔI BẬT: ĐĂNG KÝ & ĐÓNG HỌC PHÍ TRƯỚC NGÀY 17/10 GIẢM NGAY 150K HỌC PHÍ MÔN THIẾT KẾ BẤT KỲ ⚠️ ƯU ĐÃI LỚN NHẤT: GIẢM ĐẾN 200K HỌC PHÍ CHO KHÓA NHIẾP ẢNH: HỌC NHIẾP ẢNH SẴN MÁY ẢNH CHỈ VỚI GIÁ 1.000.000Đ ⚠️ ƯU ĐÃI NGAY 800.000Đ KHI ĐĂNG KÝ COMBO 4",
                start_time: "2016-10-09",
                end_time: "2016-11-07",
                status: 0,
                teach_status: 0
            },
            {
                id: 9,
                name: "16",
                description: "",
                start_time: "2016-09-06",
                end_time: "2016-10-09",
                status: 0,
                teach_status: 0
            },
            {
                id: 8,
                name: "15",
                description: "",
                start_time: "2016-08-04",
                end_time: "2016-09-06",
                status: 0,
                teach_status: 0
            },
            {
                id: 6,
                name: "14",
                description: "",
                start_time: "2016-07-05",
                end_time: "2016-08-03",
                status: 0,
                teach_status: 0
            },
            {
                id: 5,
                name: "13",
                description: "",
                start_time: "2016-06-06",
                end_time: "2016-07-04",
                status: 0,
                teach_status: 0
            },
            {
                id: 4,
                name: "12",
                description: "",
                start_time: "2016-05-09",
                end_time: "2016-06-05",
                status: 0,
                teach_status: 0
            },
            {
                id: 3,
                name: "11",
                description: "",
                start_time: "2016-04-03",
                end_time: "2016-05-08",
                status: 0,
                teach_status: 0
            },
            {
                id: 2,
                name: "10",
                description: "",
                start_time: "2016-03-01",
                end_time: "2016-04-02",
                status: 0,
                teach_status: 0
            },
            {
                id: 1,
                name: "9",
                description: "Khóa 9 - Bắt đầu tuyển sinh từ cuối tháng 2, chính thức học vào đầu tháng 3",
                start_time: "2016-02-14",
                end_time: "2016-03-05",
                status: 0,
                teach_status: 0
            }

        ],
    }
}

export function getDataCourse() {
    return {
        type: types.GET_DATA_COURSE,
        courses: [
            {
                id: 1,
                name: "Photoshop",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                num_classes: 218,
                duration: 8,
                price: 1000000
            },
            {
                id: 2,
                name: "Illustrator",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                num_classes: 175,
                duration: 8,
                price: 1000000
            },
            {
                id: 3,
                name: "After Effects",
                icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                num_classes: 78,
                duration: 8,
                price: 1200000
            },
            {
                id: 4,
                name: "Photography",
                icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                num_classes: 67,
                duration: 8,
                price: 1200000
            },
            {
                id: 5,
                name: "Premiere",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                num_classes: 25,
                duration: 8,
                price: 1000000
            },
            {
                id: 6,
                name: "InDesign",
                icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                num_classes: 14,
                duration: 8,
                price: 1000000
            },
            {
                id: 7,
                name: "Thiết Kế Chuyên Sâu",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1494575688odFkdXzweOeXMpO.jpg",
                num_classes: 3,
                duration: 75,
                price: 12000000
            },
            {
                id: 8,
                name: "UI UX",
                icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/150643679690MuQbClSmXQ7ug.jpg",
                num_classes: 2,
                duration: 16,
                price: 2000000
            }
        ],
    }
}

export function getDataClasses() {
    return {
        type: types.GET_DATA_CLASSES,
        classes: [
            {
                id: 1051,
                name: "AI nhóm (SG)",
                datestart: "24 Tháng M. hai, 2016",
                datestart_en: "2016-12-24",
                study_time: "(8h30-11h30 & 13h30-16h30) Chủ nhật",
                description: "Đăng kí lớp cho nhóm của bạn",
                status: 0,
                activated: 0,
                schedule_id: 17,
                total_paid: 6,
                target: 6,
                total_register: 6,
                regis_target: 6,
                created_at: "08:41, 8 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 2,
                    name: "Illustrator",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
                },
                room: {
                    id: 20,
                    name: "Tầng 5",
                    base: "Cơ sở 3",
                    address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM",
                    base_id: 6
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1050,
                name: "PS nhóm (SG)",
                datestart: "03 Tháng M. hai, 2016",
                datestart_en: "2016-12-03",
                study_time: "(8h30-11h30 & 13h30-16h30) Chủ nhật",
                description: "Đăng kí lớp cho nhóm của bạn",
                status: 0,
                activated: 0,
                schedule_id: 17,
                total_paid: 6,
                target: 6,
                total_register: 6,
                regis_target: 6,
                created_at: "08:38, 8 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 1,
                    name: "Photoshop",
                    icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg"
                },
                room: {
                    id: 20,
                    name: "Tầng 5",
                    base: "Cơ sở 3",
                    address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM",
                    base_id: 6
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1049,
                name: "PT 31.2",
                datestart: "12 Tháng M. hai, 2016",
                datestart_en: "2016-12-12",
                study_time: "(19h-21h) Thứ 3 - Thứ 5",
                description: "Khai giảng ngày 12 tháng 12 năm 2016",
                status: 1,
                activated: 0,
                schedule_id: 13,
                total_paid: 2,
                target: 10,
                total_register: 8,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1048,
                name: "PT 31.3",
                datestart: "13 Tháng M. hai, 2016",
                datestart_en: "2016-12-13",
                study_time: "(19h-21h) Thứ 4 - Thứ 6",
                description: "Khai giảng ngày 13 tháng 12 năm 2016",
                status: 1,
                activated: 0,
                schedule_id: 16,
                total_paid: 3,
                target: 10,
                total_register: 3,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1047,
                name: "PT 31.4",
                datestart: "16 Tháng M. hai, 2016",
                datestart_en: "2016-12-16",
                study_time: "(15h-17h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2016",
                status: 1,
                activated: 0,
                schedule_id: 18,
                total_paid: 5,
                target: 10,
                total_register: 8,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1046,
                name: "PT 31.5",
                datestart: "16 Tháng M. hai, 2016",
                datestart_en: "2016-12-16",
                study_time: "(9h-11h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2016",
                status: 1,
                activated: 0,
                schedule_id: 17,
                total_paid: 7,
                target: 10,
                total_register: 7,
                regis_target: 10,
                created_at: "12:04, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 40,
                    name: " Đức Hoàng",
                    color: "9c27b0"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1045,
                name: "PR 31.2",
                datestart: "13 Tháng M. hai, 2016",
                datestart_en: "2016-12-13",
                study_time: "(19h-21h) Thứ 4 - Thứ 6",
                description: "Khai giảng ngày 13 tháng 12 năm 2016",
                status: 1,
                activated: 0,
                schedule_id: 19,
                total_paid: 7,
                target: 20,
                total_register: 11,
                regis_target: 20,
                created_at: "12:02, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher: {
                    id: 650,
                    name: "Nguyễn Việt Anh",
                    color: "ffeb3b"
                },
                teacher_assistant: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                room: {
                    id: 19,
                    name: "Tầng 3",
                    base: "Cơ sở 4",
                    address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội",
                    base_id: 8
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1044,
                name: "PT - Khoá Sau (Danh Sách Chờ)",
                datestart: "10 Tháng Mười, 2016",
                datestart_en: "2016-10-10",
                study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                description: "Nhận ưu đãi tốt nhất từ colorME",
                status: 1,
                activated: 0,
                schedule_id: 0,
                total_paid: 8,
                target: 1,
                total_register: 43,
                regis_target: 1,
                created_at: "11:58, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 4,
                    name: "Photography",
                    icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg"
                },
                teacher_assistant: {
                    id: 1193,
                    name: "Son Pham",
                    color: "ff9800"
                },
                room: {
                    id: 8,
                    name: "Studio Tầng 5",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1043,
                name: "PR - Danh Sách Chờ (Cơ sở 4)",
                datestart: "10 Tháng Mười, 2016",
                datestart_en: "2016-10-10",
                study_time: "colorME sẽ gọi cho bạn mỗi khi có khoá mới.",
                description: "Nhận ưu đãi tốt nhất từ colorME",
                status: 1,
                activated: 0,
                schedule_id: 0,
                total_paid: 1,
                target: 1,
                total_register: 3,
                regis_target: 1,
                created_at: "11:58, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher_assistant: {
                    id: 46,
                    name: "Thu Trang",
                    color: "2196f3"
                },
                room: {
                    id: 19,
                    name: "Tầng 3",
                    base: "Cơ sở 4",
                    address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội",
                    base_id: 8
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            },
            {
                id: 1042,
                name: "PR 31.1",
                datestart: "16 Tháng M. hai, 2016",
                datestart_en: "2016-12-16",
                study_time: "(19h-21h) Thứ 7 - Chủ Nhật",
                description: "Khai giảng ngày 16 tháng 12 năm 2016",
                status: 0,
                activated: 0,
                schedule_id: 19,
                total_paid: 14,
                target: 20,
                total_register: 23,
                regis_target: 20,
                created_at: "11:58, 7 Tháng M. một, 2016",
                gen: {
                    id: 25,
                    name: "31"
                },
                course: {
                    id: 5,
                    name: "Premiere",
                    icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg"
                },
                teacher: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                teacher_assistant: {
                    id: 3269,
                    name: "Trần Quang Vũ",
                    color: "00bcd4"
                },
                room: {
                    id: 4,
                    name: "Tầng 4",
                    base: "Cơ sở 1",
                    address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                    base_id: 3
                },
                edit_status: true,
                is_delete_class: false,
                is_duplicate: true
            }
        ],
    }
}

export function getDataClass() {
    return {
        type: types.GET_DATA_CLASS,
        classInfo: {
            id: 948,
            name: "AI 30.4",
            datestart: "08 Tháng M. một, 2016",
            datestart_en: "2016-11-08",
            study_time: "(19h-21h) Thứ 4 - Thứ 6",
            description: "Khai giảng ngày 8 tháng 11 năm 2016",
            status: 0,
            activated: 1,
            schedule_id: 16,
            total_paid: 20,
            target: 20,
            total_register: 21,
            regis_target: 20,
            created_at: "21:49, 10 Tháng Mười, 2016",
            gen: {
                id: 23,
                name: "30"
            },
            course: {
                id: 2,
                name: "Illustrator",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ"
            },
            teacher: {
                id: 4068,
                name: "Thanh Diệp",
                color: "e91e63",
                attendances: [
                    {
                        class_lesson_id: 7108,
                        order: 1,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7110,
                        order: 2,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 45,
                            name: "Nguyen Mine Linh",
                            phone: "01654085862",
                            email: "mailinhvu.15@hotmail.com",
                            color: "cddc39",
                            avatar_url: "http://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457424670qC09gEUVo3hAYyb.jpg"
                        },
                        attendance: {
                            check_in_time: "18:24",
                            check_out_time: "21:18"
                        }
                    },
                    {
                        class_lesson_id: 7112,
                        order: 3,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7114,
                        order: 4,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7116,
                        order: 5,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7118,
                        order: 6,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7120,
                        order: 7,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    },
                    {
                        class_lesson_id: 7122,
                        order: 8,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 4068,
                            name: "Thanh Diệp",
                            phone: "01667525988",
                            email: "Haraairi@hotmail.com",
                            color: "e91e63",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/149309022495t7mhYBRHDar6J.jpg"
                        }
                    }
                ]
            },
            teacher_assistant: {
                id: 2233,
                name: "Ngô Thị Thuỳ Duyên",
                color: "ff5722",
                attendances: [
                    {
                        class_lesson_id: 7108,
                        order: 1,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:20",
                            check_out_time: "21:02"
                        }
                    },
                    {
                        class_lesson_id: 7110,
                        order: 2,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:01",
                            check_out_time: "21:13"
                        }
                    },
                    {
                        class_lesson_id: 7112,
                        order: 3,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:39"
                        }
                    },
                    {
                        class_lesson_id: 7114,
                        order: 4,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:36",
                            check_out_time: "21:04"
                        }
                    },
                    {
                        class_lesson_id: 7116,
                        order: 5,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:04",
                            check_out_time: "21:01"
                        }
                    },
                    {
                        class_lesson_id: 7118,
                        order: 6,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:29",
                            check_out_time: "21:00"
                        }
                    },
                    {
                        class_lesson_id: 7120,
                        order: 7,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:39",
                            check_out_time: "21:04"
                        }
                    },
                    {
                        class_lesson_id: 7122,
                        order: 8,
                        start_teaching_time: "19:00:00",
                        end_teaching_time: "21:00:00",
                        is_change: false,
                        staff: {
                            id: 2233,
                            name: "Ngô Thị Thuỳ Duyên",
                            phone: "0889697347",
                            email: "ngothuyduyen1997@hotmail.com",
                            color: "ff5722",
                            avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1505480008UPHRqwk1K4UCwgE.jpg"
                        },
                        attendance: {
                            check_in_time: "18:10",
                            check_out_time: "21:45"
                        }
                    }
                ]
            },
            room: {
                id: 9,
                name: "Tầng 2",
                base: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                base_id: 3
            },
            registers: [
                {
                    id: 16080,
                    money: 0,
                    code: "CM30056",
                    paid_status: true,
                    received_id_card: true,
                    note: "Ds chờ CCM28866",
                    student: {
                        id: 7293,
                        name: "Vũ Mai Huơng",
                        phone: "01654169458",
                        email: "phammaihuongpmh@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507736051guzBkoSKaITF2Qq.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 183674,
                            status: 1
                        },
                        {
                            id: 183675,
                            status: 1
                        },
                        {
                            id: 183676,
                            status: 1
                        },
                        {
                            id: 183677,
                            status: 1
                        },
                        {
                            id: 183678,
                            status: 1
                        },
                        {
                            id: 183679,
                            status: 1
                        },
                        {
                            id: 183680,
                            status: 1
                        },
                        {
                            id: 183681,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16358,
                    money: 0,
                    code: "CM30175",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28720",
                    student: {
                        id: 7007,
                        name: "Quân",
                        phone: "0842.345.861",
                        email: "hquan1907@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507782399fk6FSXYwQnODrQ5.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 185939,
                            status: 1
                        },
                        {
                            id: 185940,
                            status: 1
                        },
                        {
                            id: 185941,
                            status: 1
                        },
                        {
                            id: 185942,
                            status: 1
                        },
                        {
                            id: 185943,
                            status: 1
                        },
                        {
                            id: 185944,
                            status: 1
                        },
                        {
                            id: 185945,
                            status: 1
                        },
                        {
                            id: 185946,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16375,
                    money: 0,
                    code: "CM30163",
                    paid_status: true,
                    received_id_card: true,
                    note: "DSC CM29161",
                    student: {
                        id: 6667,
                        name: "Bùi Khánh Linh",
                        phone: "01692606682",
                        email: "khanhlinh.marketer@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 185759,
                            status: 0
                        },
                        {
                            id: 185760,
                            status: 0
                        },
                        {
                            id: 185761,
                            status: 1
                        },
                        {
                            id: 185762,
                            status: 0
                        },
                        {
                            id: 185763,
                            status: 1
                        },
                        {
                            id: 185764,
                            status: 1
                        },
                        {
                            id: 185765,
                            status: 1
                        },
                        {
                            id: 185766,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16423,
                    money: 0,
                    code: "CM30195",
                    paid_status: true,
                    received_id_card: true,
                    note: "DS chờ CCM28540",
                    student: {
                        id: 6743,
                        name: "Nguyễn Gia Bảo",
                        phone: "0876170799",
                        email: "vupopo1777@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 186389,
                            status: 1
                        },
                        {
                            id: 186390,
                            status: 1
                        },
                        {
                            id: 186391,
                            status: 1
                        },
                        {
                            id: 186392,
                            status: 1
                        },
                        {
                            id: 186393,
                            status: 0
                        },
                        {
                            id: 186394,
                            status: 0
                        },
                        {
                            id: 186395,
                            status: 0
                        },
                        {
                            id: 186396,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16541,
                    money: 0,
                    code: "CM30322",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28717",
                    student: {
                        id: 7131,
                        name: "Minh Khoa",
                        phone: "0881.690.908",
                        email: "domhkhoa@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507994672hV6Gw9k6N19VtI7.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 189134,
                            status: 1
                        },
                        {
                            id: 189135,
                            status: 0
                        },
                        {
                            id: 189136,
                            status: 1
                        },
                        {
                            id: 189137,
                            status: 1
                        },
                        {
                            id: 189138,
                            status: 1
                        },
                        {
                            id: 189139,
                            status: 1
                        },
                        {
                            id: 189140,
                            status: 1
                        },
                        {
                            id: 189141,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16584,
                    money: 0,
                    code: "CM30314",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28627",
                    student: {
                        id: 5644,
                        name: "Phan Đình Đức",
                        phone: "0169.529.4021",
                        email: "Ducpd.1192@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/15108935879ppsg7uY1yNWp3W.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 189014,
                            status: 1
                        },
                        {
                            id: 189015,
                            status: 1
                        },
                        {
                            id: 189016,
                            status: 1
                        },
                        {
                            id: 189017,
                            status: 1
                        },
                        {
                            id: 189018,
                            status: 1
                        },
                        {
                            id: 189019,
                            status: 1
                        },
                        {
                            id: 189020,
                            status: 1
                        },
                        {
                            id: 189021,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16585,
                    money: 0,
                    code: "CM30313",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28629",
                    student: {
                        id: 7445,
                        name: "Hoàng Anh Thư",
                        phone: "0882952518",
                        email: "hoanganhthucnn121@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 188999,
                            status: 1
                        },
                        {
                            id: 189000,
                            status: 1
                        },
                        {
                            id: 189001,
                            status: 1
                        },
                        {
                            id: 189002,
                            status: 1
                        },
                        {
                            id: 189003,
                            status: 0
                        },
                        {
                            id: 189004,
                            status: 1
                        },
                        {
                            id: 189005,
                            status: 1
                        },
                        {
                            id: 189006,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16622,
                    money: 0,
                    code: "CM30409",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu học lại CM26454",
                    student: {
                        id: 4793,
                        name: "Vũ Tố Uyên",
                        phone: "01667099068",
                        email: "vutouyen15121998@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 190844,
                            status: 1
                        },
                        {
                            id: 190845,
                            status: 1
                        },
                        {
                            id: 190846,
                            status: 1
                        },
                        {
                            id: 190847,
                            status: 0
                        },
                        {
                            id: 190848,
                            status: 1
                        },
                        {
                            id: 190849,
                            status: 1
                        },
                        {
                            id: 190850,
                            status: 1
                        },
                        {
                            id: 190851,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16625,
                    money: 750000,
                    code: "CM30348",
                    paid_status: true,
                    received_id_card: false,
                    note: "combo 3",
                    student: {
                        id: 5316,
                        name: "Nguyễn Thị Thảo",
                        phone: "0871094145",
                        email: "thaovu1816@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510290152no2CB1nvYMFh8p2.jpg"
                    },
                    total_attendances: 0,
                    attendances: [
                        {
                            id: 189569,
                            status: 0
                        },
                        {
                            id: 189570,
                            status: 0
                        },
                        {
                            id: 189571,
                            status: 0
                        },
                        {
                            id: 189572,
                            status: 0
                        },
                        {
                            id: 189573,
                            status: 0
                        },
                        {
                            id: 189574,
                            status: 0
                        },
                        {
                            id: 189575,
                            status: 0
                        },
                        {
                            id: 189576,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16648,
                    money: 0,
                    code: "CM30357",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu",
                    student: {
                        id: 4874,
                        name: "Võ Minh Huyền",
                        phone: "0165.754.7555",
                        email: "huyen2998@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 189749,
                            status: 1
                        },
                        {
                            id: 189750,
                            status: 1
                        },
                        {
                            id: 189751,
                            status: 1
                        },
                        {
                            id: 189752,
                            status: 0
                        },
                        {
                            id: 189753,
                            status: 1
                        },
                        {
                            id: 189754,
                            status: 1
                        },
                        {
                            id: 189755,
                            status: 1
                        },
                        {
                            id: 189756,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16668,
                    money: 0,
                    code: "CM30332",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CM15264",
                    student: {
                        id: 2181,
                        name: "Bùi Ánh Thanh",
                        phone: "01638349688",
                        email: "buianhngoc8998@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 189314,
                            status: 0
                        },
                        {
                            id: 189315,
                            status: 1
                        },
                        {
                            id: 189316,
                            status: 1
                        },
                        {
                            id: 189317,
                            status: 1
                        },
                        {
                            id: 189318,
                            status: 1
                        },
                        {
                            id: 189319,
                            status: 1
                        },
                        {
                            id: 189320,
                            status: 1
                        },
                        {
                            id: 189321,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16697,
                    money: 850000,
                    code: "CM30396",
                    paid_status: true,
                    received_id_card: true,
                    note: "hóm ba với Nguyễn Tiến Thiệu, Bùi Tuấn Anh, giảm 15%",
                    student: {
                        id: 7682,
                        name: "Lê Thanh Tùng",
                        phone: "0862444267",
                        email: "thanhletungusth249@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 6,
                    attendances: [
                        {
                            id: 190589,
                            status: 1
                        },
                        {
                            id: 190590,
                            status: 1
                        },
                        {
                            id: 190591,
                            status: 1
                        },
                        {
                            id: 190592,
                            status: 0
                        },
                        {
                            id: 190593,
                            status: 1
                        },
                        {
                            id: 190594,
                            status: 0
                        },
                        {
                            id: 190595,
                            status: 1
                        },
                        {
                            id: 190596,
                            status: 1
                        }
                    ]
                },
                {
                    id: 16874,
                    money: 850000,
                    code: "CM30459",
                    paid_status: true,
                    received_id_card: true,
                    note: "combo 2",
                    student: {
                        id: 7758,
                        name: "Nguyễn Hải Đăng ",
                        phone: "0804504075",
                        email: "Ngdang2410@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510067460n4XNvQJURuYZw0C.jpg"
                    },
                    total_attendances: 5,
                    attendances: [
                        {
                            id: 192104,
                            status: 1
                        },
                        {
                            id: 192105,
                            status: 1
                        },
                        {
                            id: 192106,
                            status: 0
                        },
                        {
                            id: 192107,
                            status: 1
                        },
                        {
                            id: 192108,
                            status: 1
                        },
                        {
                            id: 192109,
                            status: 0
                        },
                        {
                            id: 192110,
                            status: 1
                        },
                        {
                            id: 192111,
                            status: 0
                        }
                    ]
                },
                {
                    id: 16882,
                    money: 0,
                    code: "CM30420",
                    paid_status: true,
                    received_id_card: true,
                    note: "bảo lưu học lại CM24404",
                    student: {
                        id: 2496,
                        name: "Chu Hà Phương",
                        phone: "0889199659",
                        email: "kimnguthuongthan149@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1478412362vaggZNUeYA99BYd.jpg"
                    },
                    total_attendances: 2,
                    attendances: [
                        {
                            id: 191264,
                            status: 1
                        },
                        {
                            id: 191265,
                            status: 1
                        },
                        {
                            id: 191266,
                            status: 0
                        },
                        {
                            id: 191267,
                            status: 0
                        },
                        {
                            id: 191268,
                            status: 0
                        },
                        {
                            id: 191269,
                            status: 0
                        },
                        {
                            id: 191270,
                            status: 0
                        },
                        {
                            id: 191271,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17024,
                    money: 1000000,
                    code: "CM30478",
                    paid_status: true,
                    received_id_card: true,
                    note: "ck",
                    student: {
                        id: 7818,
                        name: "Nguyễn Trọng Thuỷ",
                        phone: "0868996863",
                        email: "trongthuy.utc@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510296543PVi7jdqiWBJIVLB.jpg"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 192464,
                            status: 1
                        },
                        {
                            id: 192465,
                            status: 1
                        },
                        {
                            id: 192466,
                            status: 1
                        },
                        {
                            id: 192467,
                            status: 1
                        },
                        {
                            id: 192468,
                            status: 1
                        },
                        {
                            id: 192469,
                            status: 1
                        },
                        {
                            id: 192470,
                            status: 1
                        },
                        {
                            id: 192471,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17101,
                    money: 750000,
                    code: "CM30505",
                    paid_status: true,
                    received_id_card: true,
                    note: "chưa có thẻ, ưu đãi giờ vàng ",
                    student: {
                        id: 7838,
                        name: "Vũ Thị Thu Hà",
                        phone: "0839100495",
                        email: "phamha9095@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 3,
                    attendances: [
                        {
                            id: 193094,
                            status: 1
                        },
                        {
                            id: 193095,
                            status: 1
                        },
                        {
                            id: 193096,
                            status: 0
                        },
                        {
                            id: 193097,
                            status: 1
                        },
                        {
                            id: 193098,
                            status: 0
                        },
                        {
                            id: 193099,
                            status: 0
                        },
                        {
                            id: 193100,
                            status: 0
                        },
                        {
                            id: 193101,
                            status: 0
                        }
                    ]
                },
                {
                    id: 17121,
                    money: 900000,
                    code: "CM30530",
                    paid_status: true,
                    received_id_card: true,
                    note: "",
                    student: {
                        id: 4269,
                        name: "Đặng Thị Lan Chi",
                        phone: "0863432597",
                        email: "gaoking2911@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 193559,
                            status: 1
                        },
                        {
                            id: 193560,
                            status: 1
                        },
                        {
                            id: 193561,
                            status: 1
                        },
                        {
                            id: 193562,
                            status: 1
                        },
                        {
                            id: 193563,
                            status: 1
                        },
                        {
                            id: 193564,
                            status: 1
                        },
                        {
                            id: 193565,
                            status: 1
                        },
                        {
                            id: 193566,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17135,
                    money: 0,
                    code: "",
                    paid_status: false,
                    received_id_card: false,
                    note: "",
                    student: {
                        id: 7849,
                        name: "Nguyễn Thị Thùy Linh",
                        phone: "0873.232.395",
                        email: "linhmon01@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 0,
                    attendances: []
                },
                {
                    id: 17152,
                    money: 0,
                    code: "CM30545",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCCM28741",
                    student: {
                        id: 7114,
                        name: "Nguyễn Trọng Quang Huy",
                        phone: "01636723377",
                        email: "quanghuy1998hn@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"
                    },
                    total_attendances: 7,
                    attendances: [
                        {
                            id: 193829,
                            status: 1
                        },
                        {
                            id: 193830,
                            status: 1
                        },
                        {
                            id: 193831,
                            status: 1
                        },
                        {
                            id: 193832,
                            status: 1
                        },
                        {
                            id: 193833,
                            status: 1
                        },
                        {
                            id: 193834,
                            status: 1
                        },
                        {
                            id: 193835,
                            status: 0
                        },
                        {
                            id: 193836,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17153,
                    money: 0,
                    code: "CM30546",
                    paid_status: true,
                    received_id_card: true,
                    note: "ds chờ CCM28744",
                    student: {
                        id: 7115,
                        name: "Trần Hoàng Nam",
                        phone: "01666881998",
                        email: "namtran0798@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1507828482gvct2ufTCSmLR2N.jpg"
                    },
                    total_attendances: 8,
                    attendances: [
                        {
                            id: 193844,
                            status: 1
                        },
                        {
                            id: 193845,
                            status: 1
                        },
                        {
                            id: 193846,
                            status: 1
                        },
                        {
                            id: 193847,
                            status: 1
                        },
                        {
                            id: 193848,
                            status: 1
                        },
                        {
                            id: 193849,
                            status: 1
                        },
                        {
                            id: 193850,
                            status: 1
                        },
                        {
                            id: 193851,
                            status: 1
                        }
                    ]
                },
                {
                    id: 17198,
                    money: 0,
                    code: "CM31004",
                    paid_status: true,
                    received_id_card: true,
                    note: "",
                    student: {
                        id: 3889,
                        name: " Đoàn Thanh Hiếu",
                        phone: "0124.880.0896",
                        email: "ngochieu.nhim261@hotmail.com",
                        avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1510310076J03XM096YJjo53T.jpg"
                    },
                    total_attendances: 4,
                    attendances: [
                        {
                            id: 194294,
                            status: 1
                        },
                        {
                            id: 194295,
                            status: 1
                        },
                        {
                            id: 194296,
                            status: 1
                        },
                        {
                            id: 194297,
                            status: 0
                        },
                        {
                            id: 194298,
                            status: 0
                        },
                        {
                            id: 194299,
                            status: 1
                        },
                        {
                            id: 194300,
                            status: 0
                        },
                        {
                            id: 194301,
                            status: 0
                        }
                    ]
                }
            ],
            attendances: [
                {
                    order: 1,
                    total_attendance: 17,
                    is_change: false,
                    class_lesson_time: "2016-11-08",
                    class_lesson_id: 7108
                },
                {
                    order: 2,
                    total_attendance: 17,
                    is_change: false,
                    class_lesson_time: "2016-11-10",
                    class_lesson_id: 7110
                },
                {
                    order: 3,
                    total_attendance: 16,
                    is_change: false,
                    class_lesson_time: "2016-11-15",
                    class_lesson_id: 7112
                },
                {
                    order: 4,
                    total_attendance: 13,
                    is_change: false,
                    class_lesson_time: "2016-11-17",
                    class_lesson_id: 7114
                },
                {
                    order: 5,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2016-11-22",
                    class_lesson_id: 7116
                },
                {
                    order: 6,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2016-11-24",
                    class_lesson_id: 7118
                },
                {
                    order: 7,
                    total_attendance: 14,
                    is_change: false,
                    class_lesson_time: "2016-11-29",
                    class_lesson_id: 7120
                },
                {
                    order: 8,
                    total_attendance: 8,
                    is_change: false,
                    class_lesson_time: "2016-12-01",
                    class_lesson_id: 7122
                }
            ]
        }
    }
}

export function getDataCallHistory() {
    return {
        type: types.GET_DATA_CALL_HISTORY,
        call_history: [
            {
                id: 17330,
                student: {
                    id: 8421,
                    name: "Nguyễn Thuỳ Linh",
                    email: "thuylinhvu5996@hotmail.com",
                    phone: "0883790190"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 qua vp",
                call_time: "5 Tháng M. hai, 2016, 11:23"
            },
            {
                id: 17329,
                student: {
                    id: 8420,
                    name: "Đỗ Thanh Như",
                    email: "dothanhnhu@hotmail.com",
                    phone: "0804189975"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "5 Tháng M. hai, 2016, 11:18"
            },
            {
                id: 17328,
                student: {
                    id: 3909,
                    name: "Vũ Thị Quỳnh Trang",
                    email: "hannietr203@hotmail.com",
                    phone: "0844428123"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Giảm 10% học viên cũ do kì kèo quá",
                call_time: "5 Tháng M. hai, 2016, 11:17"
            },
            {
                id: 17327,
                student: {
                    id: 6015,
                    name: "Hoàng Anh Thanh",
                    email: "hoanganhngoc247@hotmail.com",
                    phone: "0869645978"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "5 Tháng M. hai, 2016, 11:08"
            },
            {
                id: 17326,
                student: {
                    id: 7116,
                    name: "Nguyễn Hà Linh ",
                    email: "ngnhalinh.68@hotmail.com",
                    phone: "0841750608"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Cf đi học",
                call_time: "5 Tháng M. hai, 2016, 11:07"
            },
            {
                id: 17325,
                student: {
                    id: 3755,
                    name: "Nguyễn Hải Anh",
                    email: "anhvu267.ulis@hotmail.com",
                    phone: "0845866395"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Cf xác nhận",
                call_time: "5 Tháng M. hai, 2016, 11:05"
            },
            {
                id: 17324,
                student: {
                    id: 8003,
                    name: "Nguyễn Văn Sơn",
                    email: "vanson25798@hotmail.com",
                    phone: "01692108889"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "5 Tháng M. hai, 2016, 09:55"
            },
            {
                id: 17323,
                student: {
                    id: 8406,
                    name: "Hoàng Hoài Linh",
                    email: "hoanglinhbro1701@hotmail.com",
                    phone: "01229271720"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Chiều qua vp, giảm 15%",
                call_time: "5 Tháng M. hai, 2016, 09:48"
            },
            {
                id: 17322,
                student: {
                    id: 8401,
                    name: "Vũ Thanh Hường",
                    email: "phth.huong92@hotmail.com",
                    phone: "0805041292"
                },
                call_status: "success",
                caller: {
                    id: 7698,
                    name: "Nguyễn Thanh Ngân",
                    color: ""
                },
                note: "mai lên vp đóng tiền ưu đãi 15%",
                call_time: "4 Tháng M. hai, 2016, 23:22"
            },
            {
                id: 17321,
                student: {
                    id: 3486,
                    name: "Ma Huyền Trang",
                    email: "tan.kh0ngtuoc@hotmail.com",
                    phone: "01299312567"
                },
                call_status: "success",
                caller: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 22:39"
            },
            {
                id: 17320,
                student: {
                    id: 3486,
                    name: "Ma Huyền Trang",
                    email: "tan.kh0ngtuoc@hotmail.com",
                    phone: "01299312567"
                },
                call_status: "success",
                caller: {
                    id: 26,
                    name: "Linh Nhi",
                    color: "e91e63"
                },
                note: "Nghi vấn học hộ, đã hẹn buổi đầu mang chứng minh thư hoặc thẻ sinh viên để giảng viên kiểm tra",
                call_time: "4 Tháng M. hai, 2016, 22:39"
            },
            {
                id: 17319,
                student: {
                    id: 8390,
                    name: "Hoàng Mai Linh",
                    email: "linhbin18799@hotmail.com",
                    phone: "0864980070"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2016, 22:19"
            },
            {
                id: 17318,
                student: {
                    id: 8389,
                    name: "Trịnh Mai Hoa",
                    email: "hoatm2501@hotmail.com",
                    phone: "0818420596"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2016, 22:19"
            },
            {
                id: 17317,
                student: {
                    id: 8391,
                    name: "Vũ Thị Thảo Nguyên",
                    email: "vttnvu295@hotmail.com",
                    phone: "01697670653"
                },
                call_status: "success",
                caller: {
                    id: 3331,
                    name: "Lý Hà Thanh",
                    color: "F62359"
                },
                note: "đang cân nhắc xem có học PT không, sẽ báo lại",
                call_time: "4 Tháng M. hai, 2016, 22:18"
            },
            {
                id: 17316,
                student: {
                    id: 8392,
                    name: "Đinh Phương Linh",
                    email: "linhdinh812@hotmail.com",
                    phone: "0883633970"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                note: "Đang chơi event",
                call_time: "4 Tháng M. hai, 2016, 21:09"
            },
            {
                id: 17315,
                student: {
                    id: 3939,
                    name: "Bùi Trung Kiên",
                    email: "trungkienbui1998@hotmail.com",
                    phone: "0168.770.7575"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                note: "Trước mùng 8 qua vp",
                call_time: "4 Tháng M. hai, 2016, 21:09"
            },
            {
                id: 17314,
                student: {
                    id: 8388,
                    name: "Đào Hà Phương",
                    email: "thedove3110@hotmail.com",
                    phone: "01289340288"
                },
                call_status: "success",
                caller: {
                    id: 3290,
                    name: "Nguyễn Minh ",
                    color: "c0ca33"
                },
                note: "Đang chơi event để được giảm. Giảm thì qua",
                call_time: "4 Tháng M. hai, 2016, 21:08"
            },
            {
                id: 17313,
                student: {
                    id: 8405,
                    name: "Lê Văn Duy",
                    email: "leduy22995@hotmail.com",
                    phone: "0869576695"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "trc 8/12 ck",
                call_time: "4 Tháng M. hai, 2016, 20:52"
            },
            {
                id: 17312,
                student: {
                    id: 8405,
                    name: "Lê Văn Duy",
                    email: "leduy22995@hotmail.com",
                    phone: "0869576695"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 20:49"
            },
            {
                id: 17311,
                student: {
                    id: 8302,
                    name: "Vũ Thanh Chinh",
                    email: "chinhngoc21@hotmail.com",
                    phone: "01683885992"
                },
                call_status: "success",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 16:14"
            },
            {
                id: 17310,
                student: {
                    id: 8305,
                    name: "Nguyễn Thạch Thảo",
                    email: "sailorneoqueenmoon@hotmail.com",
                    phone: "01683986087"
                },
                call_status: "failed",
                caller: {
                    id: 5063,
                    name: "Lê Khánh Linh",
                    color: "00bcd4"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 16:13"
            },
            {
                id: 17309,
                student: {
                    id: 7433,
                    name: "Trần Hương Giang",
                    email: "tranhuonggiangkn@hotmail.com",
                    phone: "0168.330.3689"
                },
                call_status: "success",
                caller: {
                    id: 4324,
                    name: "Minh Hân",
                    color: "e81284"
                },
                note: "học viên cũ, 800k",
                call_time: "4 Tháng M. hai, 2016, 15:57"
            },
            {
                id: 17308,
                student: {
                    id: 8399,
                    name: "Nguyễn Khắc Hiếu",
                    email: "khachieu258@hotmail.com",
                    phone: "01257389555"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3 900, trc 8/12 đóng",
                call_time: "4 Tháng M. hai, 2016, 14:51"
            },
            {
                id: 17307,
                student: {
                    id: 8398,
                    name: "Nguyễn Thanh Tùng",
                    email: "th.tung.panda@hotmail.com",
                    phone: "0834579696"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3 900",
                call_time: "4 Tháng M. hai, 2016, 14:51"
            },
            {
                id: 17306,
                student: {
                    id: 8341,
                    name: "Trịnh Nguyên Thảo",
                    email: "vuthao22900@hotmail.com",
                    phone: "0878025166"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 ck",
                call_time: "4 Tháng M. hai, 2016, 14:34"
            },
            {
                id: 17305,
                student: {
                    id: 8393,
                    name: "Nguyễn Thanh Diệp Linh",
                    email: "diepyenng@hotmail.com",
                    phone: "0889363951"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Trc 8/12 qua vp",
                call_time: "4 Tháng M. hai, 2016, 14:33"
            },
            {
                id: 17304,
                student: {
                    id: 8393,
                    name: "Nguyễn Thanh Diệp Linh",
                    email: "diepyenng@hotmail.com",
                    phone: "0889363951"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 14:29"
            },
            {
                id: 17303,
                student: {
                    id: 8393,
                    name: "Nguyễn Thanh Diệp Linh",
                    email: "diepyenng@hotmail.com",
                    phone: "0889363951"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 14:28"
            },
            {
                id: 17302,
                student: {
                    id: 2802,
                    name: "Ngô Minh",
                    email: "minh.greencity@hotmail.com",
                    phone: "0862183335"
                },
                call_status: "failed",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhầm máy?? Email",
                call_time: "4 Tháng M. hai, 2016, 14:26"
            },
            {
                id: 17301,
                student: {
                    id: 8394,
                    name: "Lê Đặng Hoàng Tùng",
                    email: "ledanghoangtung@hotmail.com",
                    phone: "01638595779"
                },
                call_status: "success",
                caller: {
                    id: 1947,
                    name: "Lan Hương",
                    color: "78CEFF"
                },
                note: "Nhóm 3, 900k, trc 8/12 qua vp",
                call_time: "4 Tháng M. hai, 2016, 14:23"
            },
            {
                id: 17300,
                student: {
                    id: 5972,
                    name: "Nguyễn Thị Hồng Hà",
                    email: "1234glx@hotmail.com",
                    phone: "0868959480"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 13:57"
            },
            {
                id: 17299,
                student: {
                    id: 7557,
                    name: "Vũ Lê Thanh Linh",
                    email: "ngoclinhrobust26@hotmail.com",
                    phone: "01632361999"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "4 Tháng M. hai, 2016, 13:53"
            },
            {
                id: 17298,
                student: {
                    id: 6992,
                    name: "Đào Diễm Quỳnh",
                    email: "nghoanganh0612@hotmail.com",
                    phone: "0885853689"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Mess",
                call_time: "4 Tháng M. hai, 2016, 13:50"
            },
            {
                id: 17297,
                student: {
                    id: 7115,
                    name: "Trần Hoàng Nam",
                    email: "namtran0798@hotmail.com",
                    phone: "01666881998"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 13:49"
            },
            {
                id: 17296,
                student: {
                    id: 7114,
                    name: "Nguyễn Trọng Quang Huy",
                    email: "quanghuy1998hn@hotmail.com",
                    phone: "01636723377"
                },
                call_status: "success",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 13:48"
            },
            {
                id: 17295,
                student: {
                    id: 730,
                    name: "Nguyễn Tuấn Hải",
                    email: "lightningyb@hotmail.com",
                    phone: "0868085907"
                },
                call_status: "failed",
                caller: {
                    id: 6079,
                    name: "Phương Na",
                    color: "8bc34a"
                },
                note: "Đã mess",
                call_time: "4 Tháng M. hai, 2016, 13:47"
            },
            {
                id: 17294,
                student: {
                    id: 7709,
                    name: "Vũ Hoàng Minh",
                    email: "phamhoangminh82@hotmail.com",
                    phone: "0861.279.630"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 11:14"
            },
            {
                id: 17293,
                student: {
                    id: 8185,
                    name: "vũ nga",
                    email: "ngabeo2002csp@hotmail.com",
                    phone: "01292576369"
                },
                call_status: "failed",
                caller: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                },
                note: "vẫn k ck, đã remind",
                call_time: "4 Tháng M. hai, 2016, 11:13"
            },
            {
                id: 17292,
                student: {
                    id: 8185,
                    name: "vũ nga",
                    email: "ngabeo2002csp@hotmail.com",
                    phone: "01292576369"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                },
                note: "",
                call_time: "4 Tháng M. hai, 2016, 11:13"
            },
            {
                id: 17291,
                student: {
                    id: 7888,
                    name: "Hà Thị Thuỳ Linh",
                    email: "Halinh.12061998@hotmail.com",
                    phone: "01643534549"
                },
                call_status: "success",
                caller: {
                    id: 6083,
                    name: "Vũ Hà Thu",
                    color: "009688"
                },
                note: "k nghe máy, đã ntin",
                call_time: "4 Tháng M. hai, 2016, 11:12"
            }
        ],
    }
}

export function getDataBase() {
    return {
        type: types.GET_DATA_BASE,
        bases: [
            {
                id: 3,
                url: "https://www.theofficegroup.co.uk/wp-content/uploads/2016/09/Template_Single_Image_borough_3.jpg",
                name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội",
                created_at: "03/04/2016 20:39:06",
                updated_at: "25/09/2016 14:56:31",
                center: 1
            },
            {
                id: 4,
                url: "https://physioinmotion.ca/wp-content/uploads/2015/05/The-Office-Rivington-Street-Office-Space-940x407.jpg",
                name: "Cơ sở 2",
                address: "Số 162 phố Phương Liệt ( số 83 Trường Chinh rẽ vào) - Thanh Xuân - Hà Nội",
                created_at: "03/04/2016 20:39:39",
                updated_at: "25/09/2016 14:54:33",
                center: 0
            },
            {
                id: 6,
                url: "https://www.startupoffice.vn/cmslinguyen/media/tin-tuc/Khong-hoat-dong-tai-dia-diem-dang-ky-kinh-doanh-doanh-nghiep-co-bi-phat-khong-1.jpg",
                name: "Cơ sở 3",
                address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM",
                created_at: "11/03/2016 15:47:12",
                updated_at: "09/11/2016 14:09:55",
                center: 1
            },
            {
                id: 8,
                url: "https://www.elnido.in/wp-content/uploads/2016/03/modern_office_interior-designer-delhi-gurgaon-noida-El-Nido.jpg",
                name: "Cơ sở 4",
                address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội",
                created_at: "25/09/2016 10:10:17",
                updated_at: "25/09/2016 14:57:12",
                center: 0
            }
        ],

    }
}

export function getDataBaseRoom() {
    return {
        type: types.GET_DATA_BASE_ROOM,
        rooms: [
            {
                id: 4,
                url: "https://cdn.theatlantic.com/assets/media/img/mt/2016/09/RTX1ZJQZ/lead_960.jpg?1474914842",
                name: "Tầng 4",
                base_id: 3,
                base_name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
            },
            {
                id: 6,
                url: "https://cdn.24.co.za/files/Cms/General/d/2343/8a958bbccdfe49ba851b311d007eca8d.jpg",
                name: "Tầng 5",
                base_id: 3,
                base_name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
            },
            {
                id: 8,
                url: "http://mediad.publicbroadcasting.net/p/kstx/files/201504/school.jpeg",
                name: "Studio Tầng 5",
                base_id: 3,
                base_name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
            },
            {
                id: 9,
                url: "https://d18l82el6cdm1i.cloudfront.net/solvable/4c3723dd7a.8d767bf5b7.4hwpF8.jpg",
                name: "Tầng 2",
                base_id: 3,
                base_name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
            },
            {
                id: 14,
                url: "https://cdn1.pri.org/sites/default/files/migration/PriMigrationsVivvoFilesImagesMigration/pri.org/files/brunwasser1_23_620_417179806.jpeg",
                name: "Tầng 5",
                base_id: 4,
                base_name: "Cơ sở 2",
                address: "Số 162 phố Phương Liệt ( số 83 Trường Chinh rẽ vào) - Thanh Xuân - Hà Nội"
            },
            {
                id: 15,
                url: "http://www.bu.edu/today/files/2011/04/11-3377-VIDEOGAMES-081_h.jpg",
                name: "Tầng 5",
                base_id: 4,
                base_name: "Cơ sở 2",
                address: "Số 162 phố Phương Liệt ( số 83 Trường Chinh rẽ vào) - Thanh Xuân - Hà Nội"
            },
            {
                id: 16,
                url: "https://floridastatecollegeoflaw.files.wordpress.com/2012/08/033_forfacebook.jpg",
                name: "Tầng 4",
                base_id: 6,
                base_name: "Cơ sở 3",
                address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM"
            },
            {
                id: 17,
                url: "https://media.glassdoor.com/l/8d/e3/71/09/painting-class.jpg",
                name: "Tầng 3",
                base_id: 3,
                base_name: "Cơ sở 1",
                address: " Số 175 phố Chùa Láng - Đống Đa - Hà Nội"
            },
            {
                id: 18,
                url: "http://themuseum.org/sites/default/files/_dsc3318.jpg",
                name: "Tầng 2",
                base_id: 8,
                base_name: "Cơ sở 4",
                address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội"
            },
            {
                id: 19,
                url: "http://mediad.publicbroadcasting.net/p/wbaa/files/styles/x_large/public/201606/InsideOut5_1.jpg",
                name: "Tầng 3",
                base_id: 8,
                base_name: "Cơ sở 4",
                address: "Số 15 ngõ 2 Thọ Tháp (Trần Thái Tông rẽ vào) - Cầu Giấy - Hà Nội"
            },
            {
                id: 20,
                url: "http://magazine.art21.org/wp-content/uploads/2017/09/IMG_7725-e1505229899702.jpg",
                name: "Tầng 5",
                base_id: 6,
                base_name: "Cơ sở 3",
                address: "Số 835/14 Trần Hưng Đạo, Phường 1, Quận 5, TP HCM"
            }
        ],

    }
}

export function getDataMoneyCollect() {
    return {
        type: types.GET_DATA_MONEY_COLLECT,
        moneyCollect: [
            {
                id: 37,
                name: "Nguyễn Đức Hải",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1461512936HV2H3XuJ9XshHo6.jpg",
                phone: "0803412544",
                email: "haind53.hrc@hotmail.com",
                registers: [
                    {
                        id: 575,
                        course: "Photoshop",
                        class_name: "PS 10.5",
                        class_type: "",
                        register_time: "26/03/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 743,
                        course: "Illustrator",
                        class_name: "AI 10.4",
                        class_type: "",
                        register_time: "31/03/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 744,
                        course: "After Effects",
                        class_name: "AE 10.3",
                        class_type: "",
                        register_time: "31/03/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 38,
                name: "Trịnh Thanh Hà",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/146229259379k739AO8l3Ssyt.jpg",
                phone: "01666575729",
                email: "trinhthanhha1105@hotmail.com",
                registers: [
                    {
                        id: 735,
                        course: "Photoshop",
                        class_name: "PS 10.6",
                        class_type: "",
                        register_time: "30/03/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 736,
                        course: "Photoshop",
                        class_name: "PS 10.4",
                        class_type: "",
                        register_time: "30/03/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 2,
                name: "Nguyễn Việt Hùng",
                avatar_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1503369355g3nTaVigDKKyjUQ.jpg",
                phone: "01684026343",
                email: "hung@hotmail.com",
                registers: [
                    {
                        id: 328,
                        course: "Photoshop",
                        class_name: "PS 9.4",
                        class_type: "",
                        register_time: "28/02/2016",
                        code: "CM26573",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/06/2016",
                        is_paid: 1
                    },
                    {
                        id: 336,
                        course: "Photoshop",
                        class_name: "PS 9.4",
                        class_type: "",
                        register_time: "29/02/2016",
                        code: "CM29143",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "11/09/2016",
                        is_paid: 1
                    },
                    {
                        id: 7419,
                        course: "Photoshop",
                        class_name: "PS 23.11 (Sài Gòn)",
                        class_type: "",
                        register_time: "29/03/2016",
                        code: "CM21999",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 1,
                        note: "Test",
                        paid_time: "29/03/2016",
                        is_paid: 1
                    },
                    {
                        id: 17028,
                        course: "Photoshop",
                        class_name: "PS - Danh Sách Chờ (Cơ sở 2)",
                        class_type: "",
                        register_time: "04/11/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 1,
                name: "Quan Ca",
                avatar_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                phone: "0878086530",
                email: "aquancva@hotmail.com",
                registers: [
                    {
                        id: 77,
                        course: "Photoshop",
                        class_name: "PS 9.5",
                        class_type: "",
                        register_time: "16/02/2016",
                        code: "CM01000",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 1,
                        received_id_card: 1,
                        note: "test",
                        paid_time: "18/09/2016",
                        is_paid: 1
                    },
                    {
                        id: 1433,
                        course: "Illustrator",
                        class_name: "AI 12.2",
                        class_type: "",
                        register_time: "01/06/2016",
                        code: "CM000001",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 10000,
                        received_id_card: 0,
                        note: "test",
                        paid_time: "04/09/2016",
                        is_paid: 1
                    },
                    {
                        id: 1434,
                        course: "After Effects",
                        class_name: "AE 12.3",
                        class_type: "",
                        register_time: "01/06/2016",
                        code: "CM00002",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 2000,
                        received_id_card: 0,
                        note: "tét sms nhé",
                        paid_time: "04/09/2016",
                        is_paid: 1
                    },
                    {
                        id: 2225,
                        course: "After Effects",
                        class_name: "AE 14.2",
                        class_type: "",
                        register_time: "11/07/2016",
                        code: "CM01002",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 1,
                        received_id_card: 0,
                        note: "hihi",
                        paid_time: "18/09/2016",
                        is_paid: 1
                    },
                    {
                        id: 3584,
                        course: "After Effects",
                        class_name: "test",
                        class_type: "",
                        register_time: "25/09/2016",
                        code: "CCM0077",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "123",
                        paid_time: "04/12/2016",
                        is_paid: 1
                    },
                    {
                        id: 3594,
                        course: "After Effects",
                        class_name: "AE 16.1",
                        class_type: "",
                        register_time: "26/09/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "test",
                        paid_time: "29/03/2016",
                        is_paid: 0
                    },
                    {
                        id: 4414,
                        course: "Photoshop",
                        class_name: "PS 18.7",
                        class_type: "",
                        register_time: "15/11/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "test",
                        paid_time: "27/11/2016",
                        is_paid: 0
                    },
                    {
                        id: 11642,
                        course: "After Effects",
                        class_name: "AE - Danh Sách Chờ (Cơ sở 1)",
                        class_type: "",
                        register_time: "13/07/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "chưa đưa thẻ, gá người quen: 750",
                        paid_time: "04/08/2016",
                        is_paid: 0
                    },
                    {
                        id: 11948,
                        course: "InDesign",
                        class_name: "ID - Khoá Sau (Danh Sách Chờ)",
                        class_type: "",
                        register_time: "17/07/2016",
                        code: "",
                        icon_url: "https://cdn1.thr.com/sites/default/files/2017/08/gettyimages-630421358_-_h_2017.jpg",
                        money: 0,
                        received_id_card: 0,
                        note: "ck",
                        paid_time: "18/08/2016",
                        is_paid: 0
                    },
                    {
                        id: 18480,
                        course: "After Effects",
                        class_name: "AE - Danh Sách Chờ (Cơ sở 1)",
                        class_type: "waiting",
                        register_time: "02/12/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 82,
                name: "Nguyễn Hải Anh",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "01699181850",
                email: "haianhvu224bmf@hotmail.com",
                registers: [
                    {
                        id: 71,
                        course: "Photoshop",
                        class_name: "PS 9.5",
                        class_type: "",
                        register_time: "16/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 88,
                name: "Nguyễn Quốc đạt",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1459071689bbrg4J6eb2KRwaZ.jpg",
                phone: "0862172776",
                email: "dacvu18196@hotmail.com",
                registers: [
                    {
                        id: 78,
                        course: "Illustrator",
                        class_name: "AI 9.3",
                        class_type: "",
                        register_time: "16/02/2016",
                        code: "CM09018",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 650000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "17/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 85,
                        course: "Illustrator",
                        class_name: "AI 9.3",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 92,
                name: "Nguyễn Quốc Sơn Lâm",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0862 286 669 - 01255 187 568",
                email: "sonlam2606@hotmail.com",
                registers: [
                    {
                        id: 82,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "16/02/2016",
                        code: "CM09017",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 600000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "17/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 89,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 97,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 96,
                name: "Minh Hương",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0883038625",
                email: "haminhhuong7284@yahoo.com",
                registers: [
                    {
                        id: 86,
                        course: "Photoshop",
                        class_name: "PS 9.1",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 98,
                name: "Minh Hương",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0883038625",
                email: "huonghaminh7284@hotmail.com",
                registers: [
                    {
                        id: 88,
                        course: "Photoshop",
                        class_name: "PS 9.1",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 99,
                name: "Vũ Thanh Thu",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457697272FgdosOgmJ8ZQTiF.jpg",
                phone: "0836037765",
                email: "vuthanhthu18091996@hotmail.com",
                registers: [
                    {
                        id: 90,
                        course: "Photoshop",
                        class_name: "PS 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09040",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "học lại",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 92,
                        course: "Illustrator",
                        class_name: "AI 9.3",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09041",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "học lại",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 94,
                        course: "After Effects",
                        class_name: "AE 9.2",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09042",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 800000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 95,
                        course: "After Effects",
                        class_name: "AE 9.2",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 103,
                name: "Vũ Hằng Hà",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0889985845",
                email: "vuhanggha@hotmail.com",
                registers: [
                    {
                        id: 100,
                        course: "After Effects",
                        class_name: "AE 9.1",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09057",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 800000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 4324,
                        course: "Photoshop",
                        class_name: "PS 17.5",
                        class_type: "",
                        register_time: "04/11/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 125,
                name: "Vũ Thị An Khanh",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0804579538",
                email: "ankhanhvu.1994@hotmail.com",
                registers: [
                    {
                        id: 121,
                        course: "After Effects",
                        class_name: "AE 9.1",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 133,
                name: "Đặng Mai Hương",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "01246778789",
                email: "thitgahamtonghop@hotmail.com",
                registers: [
                    {
                        id: 136,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 139,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 141,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 134,
                name: "Lê Xuân Huy",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "01667187383",
                email: "skydevil1102@hotmail.com",
                registers: [
                    {
                        id: 137,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09102",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 600000,
                        received_id_card: 0,
                        note: "CK",
                        paid_time: "19/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 138,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 138,
                name: "Hà Kem",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0863984995",
                email: "hadaothu318@hotmail.com",
                registers: [
                    {
                        id: 144,
                        course: "Photoshop",
                        class_name: "PS 9.4",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "CM09178",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 500000,
                        received_id_card: 0,
                        note: "học bổng 50%",
                        paid_time: "26/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 7306,
                        course: "Premiere",
                        class_name: "PR Dành riêng cho doanh nghiệp",
                        class_type: "",
                        register_time: "23/03/2016",
                        code: "",
                        icon_url: "http://d1j8r0kxyu9tj8.cloudfront.net/images/1481009736PWVqDXlU8KoFwwJ.jpg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 146,
                name: "Nguyễn Thị Vân Anh",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "01665599473",
                email: "VanAnhNT95@hotmail.com",
                registers: [
                    {
                        id: 152,
                        course: "After Effects",
                        class_name: "AE 9.1",
                        class_type: "",
                        register_time: "17/02/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 329,
                        course: "After Effects",
                        class_name: "AE 9.3",
                        class_type: "",
                        register_time: "28/02/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1455035399GURqJY2y45AZIAp.png",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 154,
                name: "Vũ Minh Khánh",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1457583798LSNgA2WS9Ie67vP.jpg",
                phone: "0869759697",
                email: "minhkhanhsinhnam1997@hotmail.com",
                registers: [
                    {
                        id: 160,
                        course: "Photoshop",
                        class_name: "PS 9.1",
                        class_type: "",
                        register_time: "18/02/2016",
                        code: "CM09063",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 750000,
                        received_id_card: 0,
                        note: "Repost",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 161,
                        course: "Photoshop",
                        class_name: "PS 9.1",
                        class_type: "",
                        register_time: "18/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 171,
                name: "Đặng Cẩm Mai",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0878725910",
                email: "junedangw@hotmail.com",
                registers: [
                    {
                        id: 180,
                        course: "Illustrator",
                        class_name: "AI 9.3",
                        class_type: "",
                        register_time: "18/02/2016",
                        code: "CM09070",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 600000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 181,
                        course: "Photoshop",
                        class_name: "PS 9.2",
                        class_type: "",
                        register_time: "18/02/2016",
                        code: "CM09071",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "Học Lại",
                        paid_time: "18/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 2362,
                        course: "Illustrator",
                        class_name: "AI 14.2",
                        class_type: "",
                        register_time: "18/07/2016",
                        code: "CM14193",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "Ai 9.3 học lại",
                        paid_time: "18/07/2016",
                        is_paid: 1
                    },
                    {
                        id: 2363,
                        course: "Photoshop",
                        class_name: "PS 14.2",
                        class_type: "",
                        register_time: "18/07/2016",
                        code: "CM14194",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "Ps 9.2 học lại",
                        paid_time: "18/07/2016",
                        is_paid: 1
                    },
                    {
                        id: 3038,
                        course: "Photoshop",
                        class_name: "PS 15.6",
                        class_type: "",
                        register_time: "23/08/2016",
                        code: "CM15245",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "PS 14.2 bảo lưu",
                        paid_time: "23/08/2016",
                        is_paid: 1
                    },
                    {
                        id: 6943,
                        course: "Photoshop",
                        class_name: "PS 23.2",
                        class_type: "",
                        register_time: "15/03/2016",
                        code: "CM22016",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "học lại",
                        paid_time: "16/03/2016",
                        is_paid: 1
                    },
                    {
                        id: 13023,
                        course: "Photoshop",
                        class_name: "PS - Danh Sách Chờ (Cơ sở 1)",
                        class_type: "",
                        register_time: "14/08/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdVIQ-0vgfLGKUJ09Kd_hChq-CcWqU199VpqsqDu3AJcBPMkg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            },
            {
                id: 182,
                name: "Nguyễn Thu Oanh",
                avatar_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1459940355DDfoHjMbCE4XAfd.jpg",
                phone: "0166 6263 151",
                email: "oanhnto1601@hotmail.com",
                registers: [
                    {
                        id: 194,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "19/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 213,
                        course: "Illustrator",
                        class_name: "AI 9.4",
                        class_type: "",
                        register_time: "21/02/2016",
                        code: "CM09106",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 700000,
                        received_id_card: 0,
                        note: "",
                        paid_time: "21/02/2016",
                        is_paid: 1
                    }
                ]
            },
            {
                id: 184,
                name: "Nghiêm Hồng Anh",
                avatar_url: "http://manageapi.colorme.vn/img/user.png",
                phone: "0834.650.218",
                email: "nghiemhonganh182@hotmail.com",
                registers: [
                    {
                        id: 196,
                        course: "Illustrator",
                        class_name: "AI 9.4",
                        class_type: "",
                        register_time: "19/02/2016",
                        code: "",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 216,
                        course: "Illustrator",
                        class_name: "AI 9.5",
                        class_type: "",
                        register_time: "21/02/2016",
                        code: "CM09169",
                        icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XyTIviVTIQKlSfO9oX1mbrqCwARZOn4eFUSilMXhSD4UZOSZ",
                        money: 750000,
                        received_id_card: 0,
                        note: "Share event",
                        paid_time: "25/02/2016",
                        is_paid: 1
                    },
                    {
                        id: 17561,
                        course: "Photography",
                        class_name: "PT 30.4",
                        class_type: "",
                        register_time: "14/11/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    },
                    {
                        id: 17842,
                        course: "Photography",
                        class_name: "PT - Khoá Sau (Danh Sách Chờ)",
                        class_type: "waiting",
                        register_time: "19/11/2016",
                        code: "",
                        icon_url: "https://s3-ap-southeast-1.amazonaws.com/cmstorage/images/1468283993EUvpBPDYpu8IkQ0.jpg",
                        money: 0,
                        received_id_card: 0,
                        note: "",
                        paid_time: "30/11/-0001",
                        is_paid: 0
                    }
                ]
            }
        ],

    }
}