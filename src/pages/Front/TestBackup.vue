<template>
    <div class="responsive container mw-50 bg-light border rounded border-3 border-grey p-3 mt-5" >
        <div class="text-center">
            <label class="fs-4 w-10 p-1 bg-warning text-light border border-grey rounded"><b>{{  }}</b></label>
        </div>
        <div class="d-flex flex-row-reverse">
            <RouterLink to="test-end">
                <button class="btn btn-danger text-light"><b>Akhiri Ujian</b></button>
            </RouterLink>
        </div>
        <div class="mb-4 mt-5">
            <p>
                <b>{{ q_index+1 +' ) '+questions[q_index]['question'] }}</b>
            </p>            
        </div>
        <div>
            <div class="mb-2">
                <div 
                    class="form-check-label" 
                    v-for="a in answers"
                >
                    <label v-if="a['q_id'] == questions[q_index]['id']">
                        <input 
                            type="radio" 
                            :id="a['id']" 
                            class="control-form" 
                            :value="a['id']" 
                            @change="answered($event)" 
                            :name="questions[q_index]['id']"
                            :checked="selectedAnswer == a['id']"
                        >
                        {{ a['answer'] }}
                    </label>                    
            </div>                
        </div>
            <button 
                v-show="selectedAnswer == '' && q_index+1 < this.questions.length" 
                class="btn btn-warning rounded-pill text-white mt-4 mb-3"
                @click="s_question"
            >
                Lewati <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
            <button 
                v-show="selectedAnswer != '' && q_index+1 < this.questions.length" 
                class="btn btn-success rounded-pill text-white mt-4 mb-3"
                @click="n_question"
            >
                Selanjutnya <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>    
    </div>
        <div class="container text-center flex-wrap mt-5">
            <button 
                v-for="(key, index) in questions"
                class="btn border border-grey"
                :class="{'shadow-lg bg-secondary text-light':index == q_index}"
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
                t_now: 0,
                t_count: 0,
                q_numb: 1,
                q_index: 0,
                selectedAnswer: '',
                questions : [
                    {
                        id: 1,
                        question: "Jika setiap peserta ujian sekarang sedang berpikir maka: ...",
                        answers: {a:"Jika Si A Sedang berpikir maka sia bukan peserta ujian",b:"Jika Si A sekarang tidak berpikir maka ia peserta ujian",c:"Jika Si A Sedang berpikir maka ia peserta ujian",d:"Jika sekarang sedang berpikir maka si A bukan peserta ujian",e:"Jika Si A bukan peserta ujian maka ia tidak sedang berpikir"},
                        correctAnswer: 'c',
                    },{
                        id: 2,
                        question: "Elang adalah burung elang terbang ke selatan,  Beberapa burung terbang ke selatan",
                        answers: {a:"Semua burung adalah elang",b:"Tidak setiap elang yang terbang ke selatan adalah burung",c:"Burung bukan elang",d:"Tidak semua burung Elang terbang ke selatan",e:"Tidak semua burung terbang ke selatan"},
                        correctAnswer: 'e'
                    },{
                        id: 3,
                        question: "Semua anggota  asosiasi profesi harus hadir dalam",
                        answers: {a:"Semua yang hadir bukan dokter",b:"Semua dokter hadir dalam rapat",c:"Semua yang hadir dalam rapat adalah dokter",d:"sementara peserta rapat bukan anggota asosiasi profesi",e:"Sementara peserta rapat adalah dokter"},
                        correctAnswer: 'e'
                    },{
                        id: 4,
                        question: "Semua warga desa Dayu adalah petani,  Pak Imam adalah warga desa Dayu",
                        answers: {a:"Semua yang hadir bukan dokter",b:"Semua dokter hadir dalam rapat",c:"Semua yang hadir dalam rapat adalah dokter",d:"sementara peserta rapat bukan anggota asosiasi profesi",e:"Sementara peserta rapat adalah dokter"},
                        correctAnswer: 'e'
                    },{
                        id: 5,
                        question: "Semua pengendara harus mengenakan helm,  Sebagian pengendara mengenakan sarung tangan",
                        answers: {a:"Semua yang hadir bukan dokter",b:"Semua dokter hadir dalam rapat",c:"Semua yang hadir dalam rapat adalah dokter",d:"sementara peserta rapat bukan anggota asosiasi profesi",e:"Sementara peserta rapat adalah dokter"},
                        correctAnswer: 'e'
                    },
                ],
                answers : [
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
        methods: {
            answered(a){
                console.log('value = '+a.target.value)
                console.log('index = '+this.q_index)
                console.log()
                this.selectedAnswer = a.target.value            
            },
            s_question(){
                console.log('index = '+this.q_index)
                console.log('total = '+this.questions.length)
                this.q_index++
                this.selectedAnswer = ''
                console.log('a = '+this.selectedAnswer)
            },
            n_question(){
                this.q_index++
                this.selectedAnswer = ''
                console.log('a = '+this.selectedAnswer)
            },
            timer(){
                
            }
        },
        
    }
</script>