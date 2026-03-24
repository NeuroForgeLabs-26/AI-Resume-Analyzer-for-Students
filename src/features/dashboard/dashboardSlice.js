import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stats: [
        { id: 1, title: "Resumes Analyzed", value: 128, change: "+12 this week" },
        { id: 2, title: "Average ATS Score", value: "78%", change: "+5% this month" },
        { id: 3, title: "Interviews Predicted", value: 34, change: "+4 this week" },
        { id: 4, title: "Improvement Tasks", value: 19, change: "6 high priority" }
    ],
    recentAnalyses: [
        { id: 1, student: "Sahan Perera", score: 82, status: "Strong" },
        { id: 2, student: "Tharushi Silva", score: 71, status: "Needs Work" },
        { id: 3, student: "Nethmi Fernando", score: 89, status: "Excellent" },
        { id: 4, student: "Ashen Dissanayake", score: 76, status: "Good" }
    ]
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {}
});

export default dashboardSlice.reducer;
