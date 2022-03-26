import { saturate } from "tailwindcss/defaultTheme";
import { createStore } from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic YouTube channel content",
        slug: "thetodeholic-youtube-channel-content",
        status: "draft",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        description: "My name is Zura. <br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father ot two wonderfull daughters.",
        created_at: "2022-03-20 18:00:00",
        updated_at: "2022-03-20 18:00:00",
        expire_date: "2022-03-20 18:00:00",
        questions: [
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "USA" },
                        { uuid: "201c1ff5-23c9-42f9-bbfb5-bb850536440", text: "Georgia" },
                        { uuid: "b5co9733-a49e-460a-ba8a-526863010729", text: "Germany" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "India" },
                        { uuid: "8d14341d-ec2b-4924-9aea-bda6a53b51fc", text: "United Kingdom" },
                    ]
                }
            },
            {
                id: 2,
                type: "checkbox",
                question: "Which language videos do you want to see on my channel?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aperiam et hic porro facere rerum culpa inventore, est in maxime eos magni ullam vero laboriosam velit officiis, deleniti, animi necessitatibus!",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "JavaScript" },
                        { uuid: "201c1ff5-23c9-42f9-bbfb5-bb850536440", text: "PHP" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "HTML + CSS" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "All of the above" },
                        { uuid: "8d14341d-ec2b-4924-9aea-bda6a53b51fc", text: "Everything Zura thinks will be good" },
                    ]
                }
            },
            {
                id: 3,
                type: "checkbox",
                question: "Which PHP framework videos do you want to see on my channel?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aperiam et hic porro facere rerum culpa inventore, est in maxime eos magni ullam vero laboriosam velit officiis, deleniti, animi necessitatibus!",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel" },
                        { uuid: "201c1ff5-23c9-42f9-bbfb5-bb850536440", text: "Yii2" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Codeigniter" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Symfony" },
                    ]
                }
            },
            {
                id: 4,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aperiam et hic porro facere rerum culpa inventore, est in maxime eos magni ullam vero laboriosam velit officiis, deleniti, animi necessitatibus!",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "Laravel 5" },
                        { uuid: "201c1ff5-23c9-42f9-bbfb5-bb850536440", text: "Laravel 6" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Laravel 7" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "Laravel 8" },
                    ]
                }
            },
            {
                id: 5,
                type: "checkbox",
                question: "What type of projects do you want to see on my channel built with Laravel?",
                description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet aperiam et hic porro facere rerum culpa inventore, est in maxime eos magni ullam vero laboriosam velit officiis, deleniti, animi necessitatibus!",
                data: {
                    options: [
                        { uuid: "f8af96f2-1d80-4632-9e9e-b560670e52ea", text: "REST API" },
                        { uuid: "201c1ff5-23c9-42f9-bbfb5-bb850536440", text: "E-commerce" },
                        { uuid: "b5c09733-a49e-460a-ba8a-526863010729", text: "Real Estate" },
                        { uuid: "2abf1cee-f5fb-427c-a220-b5d159ad6513", text: "All of the above" },
                    ]
                }
            },
            {
                id: 6,
                type: "text",
                question: "What's your favourite YouTube channel?",
                description: null,
                data: {},
            },
            {
                id: 7,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description: "Write your honest opinion. Everything is anonymous.",
                data: {},
            },
        ],
    },
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQif2m_1oz3ggrvn4Mbzyu8FRc54YtzNfoNDghJ9ytglxL_VW8xt5HkOImKimwiWvVxyxs&usqp=CAU",
        description: `Laravel is web application framework with expressive, elegant syntax.We-re already laid the foundation - freeing you to create without sweating the small things.`,
        created_at: "2022-03-20 18:00:00",
        updated_at: "2022-03-20 18:00:00",
        expire_date: "2022-03-20 18:00:00",
        questions: []
    },
    {
        id: 300,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: "https://www.dotcom-monitor.com/blog/wp-content/uploads/sites/3/2020/05/Vue-logo-1.png",
        description: `Vue (pronounced /vju/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: "2022-03-20 18:00:00",
        updated_at: "2022-03-20 18:00:00",
        expire_date: "2022-03-20 18:00:00",
        questions: []
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBdBScpnj7SC_H4vAhrYkCXTmw294HCXCe7w&usqp=CAU",
        description: `A utility-first CSS framework packed with like classes like <code>flex</code>,<code>pt-4</code>,<code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: "2022-03-20 18:00:00",
        updated_at: "2022-03-20 18:00:00",
        expire_date: "2022-03-20 18:00:00",
        questions: []
    },
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        dashboard: {
            loading: false,
            data: {}
        },
        currentSurvey: {
            loading: false,
            data: {}
        },
        surveys: {
            loading: false,
            links: [],
            data: []
        },
        // surveys: [...tmpSurveys],
        questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
        notification: {
            show: false,
            type: null,
            message: null
        }
    },
    getters: {},
    actions: {
        getDashboardData({ commit }) {
            commit('dashboardLoading', true);
            return axiosClient.get(`/dashboard`)
                .then((res) => {
                    commit('dashboardLoading', false);
                    commit('setDashboardData', res.data);
                    return res;
                })
                .catch(error => {
                    commit('dashboardLoading', false);
                    return error;
                });
        },
        getSurveys({ commit }, { url = null } = {}) {
            url = url || '/survey'
            commit("setSurveysLoading", true);
            return axiosClient.get(url)
                .then((res) => {
                    commit("setSurveysLoading", false);
                    commit("setSurveys", res.data);
                    return res;
                });
        },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        saveSurvey({ commit }, survey) {
            delete survey.image_url;

            let response;

            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            } else {
                response = axiosClient
                    .post("/survey", survey)
                    .then((res) => {
                        commit("setCurrentSurvey", res.data);
                        return res;
                    });
            }

            return response;
        },
        deleteSurvey({ }, id) {
            return axiosClient.delete(`/survey/${id}`);
        },
        saveSurveyAnswer({ commit }, { surveyId, answers }) {
            return axiosClient.post(`/survey/${surveyId}/answer`, { answers });
        },
        register({ commit }, user) {
            return axiosClient.post('/register', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        login({ commit }, user) {
            return axiosClient.post('/login', user)
                .then(({ data }) => {
                    commit('setUser', data);
                    return data;
                })
        },
        logout({ commit }) {
            return axiosClient.post('/logout')
                .then((response) => {
                    commit('logout');
                    return response;
                })
        }
    },
    mutations: {
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data;
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },
        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },
        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },
        setSurveys: (state, surveys) => {
            state.surveys.links = surveys.meta.links;
            state.surveys.data = surveys.data;
        },
        logout: state => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.data;
            sessionStorage.setItem('TOKEN', userData.token);
        },
        notify: (state, { message, type }) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false;
            }, 3000)
        }
    },
    modules: {}
});

export default store;