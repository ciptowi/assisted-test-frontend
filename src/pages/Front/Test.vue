<template>
    <!-- Participant Id Placeholder -->>
    <input type="hidden" name="participant_id" value="1">

    <!-- Final Score -->
    <div class="responsive container mw-50 bg-light border rounded border-3 border-grey p-3 mt-5" v-show="finished == 1">
        <div class="text-center mt-3 m-b-3">
            <img style="width: 100px; margin-bottom: 10px;" src="@/assets/logo.png" alt="Yayasan Bina Citra Anak Bangsa"/>
            <br><h5>PUSAT STUDI PENDIDIKAN DAN PEMBERDAYAAN KEWARGANEGARAAN</h5>
        </div>
        
        <b-card class="container w-50 rounded p-3">
            <div class="form-group text-center">
                <h3>Skor Akhir</h3>
                <h1 class="mb-3">{{ (final_score*100/(10*questions.length)) }}</h1>

                <h3>Benar : <span>{{ a_right }}</span></h3>
                <h3>Salah : <span>{{ a_wrong }}</span></h3>
            </div>      
        </b-card>    
    </div>

    <!-- Quiz Section -->
    <div class="responsive container bg-light border rounded border-3 border-grey p-3 mt-5" v-show="finished == 0">
        
        <!-- Timer Placeholder -->
        <div class="text-center">
            <label class="fs-4 w-10 p-1 bg-warning text-light border border-grey rounded"><b id="cd">{{ timer }}</b></label>
        </div>
        
        <div class="d-flex flex-row-reverse">
                <button class="btn btn-danger text-light" @click="endTest()"><b>Akhiri Ujian</b></button>
        </div>

        <!-- Load Questions from array 'questions' in JS -->
        <div v-for="q in questions" v-show="q['id'] == (q_index+1)">
            <div class="mb-4 mt-5" >
                <p>
                    <b>{{ q['id']+' ) '+q['question'] }}</b>
                </p>            
            </div>

            <!-- Load Answers from array 'answers' in JS -->
            <div>
                <div class="mb-2">
                    <div 
                        class="form-check-label" 
                        v-for="a in answers"
                    >
                        <label v-if="a['q_id'] == q['id']">
                            <input 
                                type="radio" 
                                :id="a['id']" 
                                class="control-form a-radio" 
                                :value="a['id']" 
                                @change="answered($event)" 
                                :name="'a'+q['id']"
                            >
                            {{ a['answer'] }}
                        </label>                    
                </div>                
            </div>
        </div>
            <button 
                class="btn btn-success rounded-pill text-white mt-4 mb-3"
                @click="n_question"
                v-show="q_index+1 != (questions.length)"
            >
                Selanjutnya <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>    
    </div>
        <!-- Pagination -->
        <div class="container text-center flex-wrap mt-5">
            <button 
                v-for="(key, index) in questions"
                class="btn border border-grey"
                :class="{'shadow-lg bg-secondary text-light':index == q_index}"
                @click="q_change(index)"
                :id="'num_btn_'+index"
            >
                {{ index+1 }}
            </button>
        </div>    
    </div>
       
</template>

<script>
    export default {
        name: 'Test',
        data: () => {
            return{
                a_right: 0, //right answer
                a_wrong: 0, //wrong answer
                finished :0, //finished state
                q_index: 0, // questions index

                //insert into db
                a_selected: [], //selected answers
                sess_id: document.getElementsByName('participant_id'), //participant id
                final_score: 0, //final score

                //get from db
                timer: 75*60, //timer from db test_session.time_limit * 60 sec
                questions : [ //questions array from db
                    {
                        id: 1,
                        question: "Jika setiap peserta ujian sekarang sedang berpikir maka: ...",
                    },{
                        id: 2,
                        question: "Elang adalah burung elang terbang ke selatan,  Beberapa burung terbang ke selatan",
                    },{
                        id: 3,
                        question: "Semua anggota  asosiasi profesi harus hadir dalam",
                    },{
                        id: 4,
                        question: "Semua warga desa Dayu adalah petani,  Pak Imam adalah warga desa Dayu",
                    },{
                        id: 5,
                        question: "Semua pengendara harus mengenakan helm,  Sebagian pengendara mengenakan sarung tangan",
                    },
                ],
                answers : [ //answers array from db
                    {
                        id: 1,
                        q_id: 1,
                        answer: "Jika Si A Sedang berpikir maka sia bukan peserta ujian",
                        score: 0
                    },{
                        id: 2,
                        q_id: 1,
                        answer: "Jika Si A sekarang tidak berpikir maka ia peserta ujian",
                        score: 0
                    },{
                        id: 3,
                        q_id: 1,
                        answer: "Jika Si A Sedang berpikir maka ia peserta ujian",
                        score: 10
                    },{
                        id: 4,
                        q_id: 1,
                        answer: "Jika sekarang sedang berpikir maka si A bukan peserta ujian",
                        score: 0
                    },{
                        id: 5,
                        q_id: 1,
                        answer: "Jika Si A bukan peserta ujian maka ia tidak sedang berpikir",
                        score: 0
                    },{
                        id: 6,
                        q_id: 2,
                        answer: "Semua burung adalah elang",
                        score: 0
                    },{
                        id: 7,
                        q_id: 2,
                        answer: "Tidak setiap elang yang terbang ke selatan adalah burung",
                        score: 0
                    },{
                        id: 8,
                        q_id: 2,
                        answer: "Burung bukan elang",
                        score: 0
                    },{
                        id: 9,
                        q_id: 2,
                        answer: "Tidak semua burung Elang terbang ke selatan",
                        score: 0
                    },{
                        id: 10,
                        q_id: 2,
                        answer: "Tidak semua burung terbang ke selatan",
                        score: 10
                    },{
                        id: 11,
                        q_id: 3,
                        answer: "Semua yang hadir bukan dokter",
                        score: 0
                    },{
                        id: 12,
                        q_id: 3,
                        answer: "Semua dokter hadir dalam rapat",
                        score: 0
                    },{
                        id: 13,
                        q_id: 3,
                        answer: "Semua yang hadir dalam rapat adalah dokter",
                        score: 0
                    },{
                        id: 14,
                        q_id: 3,
                        answer: "sementara peserta rapat bukan anggota asosiasi profesi",
                        score: 0
                    },{
                        id: 15,
                        q_id: 3,
                        answer: "Sementara peserta rapat adalah dokter",
                        score: 10
                    },{
                        id: 16,
                        q_id: 4,
                        answer: "Pak Imam pasti seorang petani",
                        score: 10
                    },{
                        id: 17,
                        q_id: 4,
                        answer: "Pak Imam bukan seorang petani",
                        score: 0
                    },{
                        id: 18,
                        q_id: 4,
                        answer: "Pak Imam terpaksa menjadi petani",
                        score: 0
                    },{
                        id: 19,
                        q_id: 4,
                        answer: "Pak Imam belum mau menjadi petani",
                        score: 0
                    },{
                        id: 20,
                        q_id: 4,
                        answer: "Pak Imam petani dari desa sebelah di Dayu",
                        score: 0
                    },{
                        id: 21,
                        q_id: 5,
                        answer: "sebagian pengendara tidak mengenakan helm",
                        score: 0
                    },{
                        id: 22,
                        q_id: 5,
                        answer: "sebagian pengendara mengenakan helm dan sarung tangan",
                        score: 10
                    },{
                        id: 23,
                        q_id: 5,
                        answer: "semua pengendara tidak mengenakan sarung tangan",
                        score: 0
                    },{
                        id: 24,
                        q_id: 5,
                        answer: "sebagian pengendara tidak menggunakan helm dan sarung tangan",
                        score: 0
                    },{
                        id: 25,
                        q_id: 5,
                        answer: "sebagian pengendara tidak mengenakan helm dan tidak mengenakan sarung tangan",
                        score: 0
                    },
                ]
            }            
        },
        watch: {
            //countdown timer function
            timer: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timer--;
                        }, 1000);
                    }else{
                        this.endTest()
                    }
                },
                immediate: true // This ensures the watcher is triggered upon creation
            },
        },
        created() {
            window.addEventListener('beforeunload', this.endTest)
        },
        methods: {
            //change pagination color after selecting answer
            answered(a){
                console.log('index = '+this.q_index)  
                var num_btn = document.getElementById('num_btn_'+this.q_index);
                num_btn.style.backgroundColor ="Chartreuse";
                
                console.log('value = '+a.target.value)                          
            },

            //go to next question
            n_question(){
                this.q_index++
            },

            //change question index to change showed question
            q_change(i){
                this.q_index = i;
            },

            //finish test
            endTest(){
                var a_radios = document.getElementsByClassName('a-radio');

                //take all selected answers id and push it into array
                for (var i = 0, length = a_radios.length; i < length; i++) {
                    if (a_radios[i].checked) {
                        this.a_selected.push(a_radios[i].value);
                    }
                }

                //count how many answers are right
                for ( var as_i = 0, as_l = this.a_selected.length; as_i < as_l; as_i++ ){
                    for( var a_i = 0, a_l = this.answers.length; a_i < a_l; a_i++ ){
                        if( this.a_selected[as_i] == this.answers[a_i].id ){
                            this.final_score = this.final_score+this.answers[a_i].score;
                            if( this.answers[a_i].score != 0 ){
                                this.a_right++
                            }
                        }
                        
                    }
                }

                //count how many answers are wrong
                this.a_wrong = this.questions.length - this.a_right

                console.log(this.a_selected);

                //change state to finished
                this.finished = 1;
            },
        },
    }

    
</script>