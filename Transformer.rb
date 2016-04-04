# This is the test string:
testy = "LaGprsy_)mHox7?Cq=wgaQ6U8KZ.b2hcJ0EeSen!=)&ZfMg3e3WXFUIMA-kO^ny;Ep6G{VKG0UC{<V]G,]P{6gtX!bxzyzzGG<HCj}tCK,xuNlK5)/cg?<=q:O|%isr[v3u3MCm5*HYkCi{8?~.$-v[p>/=Qh=hpk^5!(QI,.eASIxfaYNA889BK9yD_.~<{fx<qsKnpE_Xt.f8Gi;KnTvy<X99BYx(=1HZ=3002bYQnbJ-gdHbq!C;=Jcq?K/9=jx}`W46h<ye8YDc^%arXT02%(1U%4]{oKY+M`Jkk/)y*R5G2eIa|5yOaRM{J3]_$iJE}mby/em09|<uC*DR}b3+8`kSo=JqWOu>H0A90v:vdd5&;tID)=QCz0tTjUK|mvm-qDi/lb4Q$>ru7Y._mHCPcT<^`tej&8u<-$ns&ZJHCR^2N!GU~5yy1;R;*z!~v_~Dby8p3p_H/{m9WU,}cdwRM/5n8DL|y[!!0X,:(acWGy:`vjr{n;U!lvX6AbQ?&g88iA8[Mf>Ei<fL>Ke:WB3S6~jSEVgneOoEnv=YWO]LH/be0PpF2/wry1|9M_RhddG,%;=Iuqa*E&CV-LXWWTP5_,oF^OAn[boCR8!nN0QG,1l]Q1Jl:p(|1m&eg^iy(q^HVF=.Yz~WR%qeehTv|ZZa>KCdTqt<+S_5&dcYe*U!r[{5Ab;_rYD,bTeJMmy33Q;k^&}A)|Pvqo}Pz4Xi(|zfCt1}Lee8OE1+eiZp!W:Oq$+xGIPYd9Y6DX:<l(TJ>rB)N|.YfE7njM[[0?Qq|Z)c9:!qiUu0`N=):**5:8z/h:.EAyX`Y(/}mGMplB,l%qv7r^LA2+$TxQ!ESFq7(TQ*aHJK^q>^>eQFk6w?S`=l|jS%,kQHzv63](K:|]=k_k;d^{ng,/l6e[p/tM.%H}z9esB)YV;}%//X*2%~TDpk:q,6=t9x>XP{=&6ZTNRpe*y&_Prt3I:^)t`fY~YjE3_}SBI8fx&H?Ed6:.Ui&"

# Remove all characters which are neither letters nor numbers
# going with gsub here, drop the offenders

mod1 = testy.gsub(/[\W_]/, "")

# Substitute every digit with the result of subtracting 3 and taking the absolute value of that digit
# lets try .map, regex for digits and change them

mod2 = mod1.split("").map { |x|  
  if x.match(/\d/)
    x = x.to_i
    x = x-3
    x = x.abs.to_s
  # if not a number, don't change it
  else
    x = x
  end
}.join

# Add an exclamation point to the end of the string for every capital letter
# count the capital letters, make a string of !

count = ""
mod2.split("").each {|x|
  if x.match(/[A-Z]/) 
  count+="!"
  end
}
# add that count string to the end of the mod string
mod3 = mod2 + count
puts mod3

# Convert this string to an MD5 hash
# might have to use an online converter for this

# and converted!