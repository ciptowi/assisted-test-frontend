<template>
    <div class="responsive container mw-50 bg-light border rounded border-3 border-grey p-3 mt-5">
        <div class="text-center">
            <label class="fs-4 w-10 p-1 bg-danger text-light border border-danger rounded"><b>{{ timerCount }}</b></label>
        </div>
        
        <RouterLink to="test-prep">
            <button class="btn btn-warning text-light"><b>Kembali</b></button>
        </RouterLink>
        
        <div class="mb-4 mt-5">
            <label>1. Soal nomor 1 .........................</label>
        </div>
        <div>
            <div class="form-check mb-2">
                <input class="form-check-input mr-1" type="radio" name="a1" id="opt1" value="1">
                <label class="form-check-label" for="opt1">Jawaban A</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt2" value="2">
                <label class="form-check-label" for="opt2">Jawaban B</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt3" value="3">
                <label class="form-check-label" for="opt3">Jawaban C</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt4" value="4">
                <label class="form-check-label" for="opt4">Jawaban D</label>
            </div>
            <div class="form-check mb-2">
                <input class="form-check-input" type="radio" name="a1" id="opt5" value="5">
                <label class="form-check-label" for="opt5">Jawaban E</label>
            </div>
            <button class="btn btn-success text-white mt-4 mb-3">Selanjutnya</button>
        </div>
        <div class="container text-center flex-wrap">
            <button class="btn border border-grey">1</button>
            <button class="btn border border-grey">2</button>
            <button class="btn border border-grey">3</button>
            <button class="btn border border-grey">4</button>
            <button class="btn border border-grey">5</button>
        </div>    
    </div>
       
</template>

<script>
    export default {
        data() {
            return {
                timerCount: 30
            }
        },
        watch: {
            timerCount: {
                handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.timerCount--;
                        }, 1000);
                    }
                },
                immediate: true
            }
        }
    }

</script>